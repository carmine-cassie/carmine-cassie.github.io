import * as THREE from 'three';
import { MapControls } from 'three/addons/controls/MapControls.js';

// Table of Contents:
// - PROJECTION FUNCTION
// - SET UP RENDERER
// - CAMERA & CONTROLS
// - PAYPHONE API
// - DRAW EXPLORED DOTS
// - DRAW UNEXPLORED DOTS
// - DRAW FOG
// - TILE DRAWING

window.addEventListener('hashchange', () => {
  location.reload();
});

if (window.location.hash) {
  console.log(document.getElementById('map'));
  document.getElementById('map').style.display = 'block';
  document.getElementById('home').style.display = 'none';

  ////////////////////////////////////////////////////////////////////////////////////
  // MAP BORDER
  // TODO lock the camera to within these :p
  const BORDER_SCALE = 5;
  const LEFT_BORDER = 24;
  const RIGHT_BORDER = 31;
  const TOP_BORDER = 16;
  const BOTTOM_BORDER = 21;

  ////////////////////////////////////////////////////////////////////////////////////
  // PROJECTION FUNCTION
  const scale_basis = 14;

  // Reprojects from equirectangular to xy web mercator coords from 0-256.
  // y value goes from 0 to -256 so that downwards works fine from camera
  function project(lon, lat) {
    const lon_deg = lon;
    const lat_rad = (lat / 180) * Math.PI;

    // We use a "default zoom" of 4, which just means our values will be between 0-16384
    const n = Math.pow(2, scale_basis);

    // Based on psuedocode from https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames
    const xtile = n * ((lon_deg + 180) / 360);
    const ytile =
      -(n * (1 - Math.log(Math.tan(lat_rad) + 1 / Math.cos(lat_rad)) / Math.PI)) / 2;

    return [xtile, ytile];
  }

  ////////////////////////////////////////////////////////////////////////////////////
  // SET UP RENDERER
  // Get the canvas from the html document
  const canvas = document.querySelector('#bgcanvas');

  // Build the renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Scene setup - simplest possible
  const scene = new THREE.Scene();

  ////////////////////////////////////////////////////////////////////////////////////
  // CAMERA & CONTROLS

  let aspect = window.innerWidth / window.innerHeight;
  const camera = new THREE.OrthographicCamera(
    aspect / -2,
    aspect / 2,
    1 / 2,
    1 / -2,
    1,
    50,
  );
  camera.up.set(0, 1, 0);

  // Get the camera pos from local storage, with sensible defaults
  camera.position.set(
    localStorage.getItem('cameraX') || 14336,
    localStorage.getItem('cameraY') || -9536,
    5,
  );
  camera.zoom = localStorage.getItem('cameraZoom') || (1 / 35) * Math.min(aspect, 1);

  const controls = new MapControls(camera, renderer.domElement);
  // I'll be real i don't understand the target setting line but it breaks without em
  controls.target.set(camera.position.x, camera.position.y, 0);
  controls.mouseButtons = {
    LEFT: THREE.MOUSE.PAN,
  };
  controls.touches = {
    ONE: THREE.TOUCH.PAN,
    TWO: THREE.TOUCH.DOLLY_ROTATE,
  };
  controls.screenSpacePanning = true;
  controls.enableRotate = false;
  controls.enableDamping = false;
  controls.zoomToCursor = true;
  controls.maxZoom = 2;
  controls.minZoom = 0.0002;

  // Update the size on window resize
  function redrawScene() {
    // Clamp the position
    const bounds_scale = Math.pow(2, scale_basis - BORDER_SCALE);

    if (controls.target.x < LEFT_BORDER * bounds_scale) {
      controls.target.setX(LEFT_BORDER * bounds_scale);
      camera.position.x = LEFT_BORDER * bounds_scale;
    } else if (controls.target.x > RIGHT_BORDER * bounds_scale) {
      controls.target.setX(RIGHT_BORDER * bounds_scale);
      camera.position.x = RIGHT_BORDER * bounds_scale;
    }

    if (controls.target.y < -BOTTOM_BORDER * bounds_scale) {
      controls.target.setY(-BOTTOM_BORDER * bounds_scale);
      camera.position.y = -BOTTOM_BORDER * bounds_scale;
    } else if (controls.target.y > -TOP_BORDER * bounds_scale) {
      controls.target.setY(-TOP_BORDER * bounds_scale);
      camera.position.y = -TOP_BORDER * bounds_scale;
    }

    let aspect = window.innerWidth / window.innerHeight;

    camera.left = aspect / -2;
    camera.right = aspect / 2;
    camera.top = 1 / 2;
    camera.bottom = 1 / -2;

    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Write the camera pos to local storage so we can load to it
    localStorage.setItem('cameraX', camera.position.x);
    localStorage.setItem('cameraY', camera.position.y);
    localStorage.setItem('cameraZoom', camera.zoom);

    renderer.render(scene, camera);
  }
  window.addEventListener('resize', redrawScene, false);

  controls.addEventListener('change', () => redrawScene());
  controls.update();

  ////////////////////////////////////////////////////////////////////////////////////
  // PAYPHONE API
  const players = payphones['players'];
  const phones = payphones['payphones'];

  // TODO handle no hash given (don't load the page if no hash?)
  const me = window.location.hash.slice(1);

  // Get useful stuff from the api data
  let my_phones = (await (await fetch(`past_captures/${me}.json`)).json())[
    'payphoneIds'
  ];

  const user_elem = document.getElementById('user');
  user_elem.innerText = `${players[me]['emoji']} ${players[me]['name']}`;

  const explored_elem = document.getElementById('explored');
  explored_elem.innerText = my_phones.length;

  const total_elem = document.getElementById('total');
  total_elem.innerText = phones.length;

  const phone_coords = triangulation['coords'];

  // Project all the coords into web mercator
  Object.keys(phone_coords).forEach((id) => {
    phone_coords[id] = project(phone_coords[id][0], phone_coords[id][1]);
  });

  // Useful to have just the IDs, for looping through the phones
  const phone_ids = Object.keys(phone_coords);

  ////////////////////////////////////////////////////////////////////////////////////
  // DRAW EXPLORED DOTS
  // Get a separate set of phone coords that have been explored
  const explored_coords = phone_ids
    .filter((id) => {
      return my_phones.some((i) => {
        return i == id;
      });
    })
    .map((id) => {
      return phone_coords[id];
    });

  // Convert to a Float32Array so we can draw it as a point cloud
  const e_positions = new Float32Array(explored_coords.length * 3);
  for (let i = 0; i < explored_coords.length; i++) {
    const i3 = i * 3;

    e_positions[i3 + 0] = explored_coords[i][0];
    e_positions[i3 + 1] = explored_coords[i][1];
    e_positions[i3 + 2] = 0;
  }

  // Write those points into a buffer geometry,
  const e_geometry = new THREE.BufferGeometry();
  e_geometry.setAttribute('position', new THREE.BufferAttribute(e_positions, 3));

  // Add a point cloud material
  const e_material = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 1.5,
  });

  // And add it to the scene as a point cloud at Z=3
  const e_points = new THREE.Points(e_geometry, e_material);
  e_points.translateZ(3);
  scene.add(e_points);

  ////////////////////////////////////////////////////////////////////////////////////
  // DRAW UNEXPLORED DOTS
  // Get a separate set of phone coords that have not been explored
  const unexplored_coords = phone_ids
    .filter((id) => {
      return !my_phones.some((i) => {
        return i == id;
      });
    })
    .map((id) => {
      return phone_coords[id];
    });

  // Convert to a Float32Array so we can draw it as a point cloud
  const u_positions = new Float32Array(unexplored_coords.length * 3);
  for (let i = 0; i < unexplored_coords.length; i++) {
    const i3 = i * 3;

    u_positions[i3 + 0] = unexplored_coords[i][0];
    u_positions[i3 + 1] = unexplored_coords[i][1];
    u_positions[i3 + 2] = 0;
  }

  // Write those points into a buffer geometry,
  const u__geometry = new THREE.BufferGeometry();
  u__geometry.setAttribute('position', new THREE.BufferAttribute(u_positions, 3));

  // Add a point cloud material
  const u_material = new THREE.PointsMaterial({
    color: 0x777777,
    size: 1.5,
  });

  // And add it to the scene as a point cloud at Z=2
  const u_points = new THREE.Points(u__geometry, u_material);
  u_points.translateZ(2);
  scene.add(u_points);

  ////////////////////////////////////////////////////////////////////////////////////
  // DRAW FOG
  // Create a Float32Array of all the phones
  // (Plus 4 for the world corners)
  const positions = new Float32Array((phone_ids.length + 4) * 3);

  // Add all the phones
  for (let i = 0; i < phone_ids.length; i++) {
    const i3 = i * 3;

    positions[i3 + 0] = phone_coords[phone_ids[i]][0];
    positions[i3 + 1] = phone_coords[phone_ids[i]][1];
    positions[i3 + 2] = -1;
  }

  // Add the corners
  // Top left, Bottom left, Bottom right, Top right
  const TOP_LEFT = 0;
  const BOTTOM_LEFT = 1;
  const BOTTOM_RIGHT = 2;
  const TOP_RIGHT = 3;
  const corners = [
    [24, -16],
    [24, -21],
    [31, -21],
    [31, -16],
  ];

  let corner_ids = [];

  for (let i = 0; i < 4; i++) {
    corner_ids.push(i + phone_ids.length);
    const i3 = (i + phone_ids.length) * 3;

    positions[i3 + 0] = corners[i][0] * Math.pow(2, scale_basis - 5);
    positions[i3 + 1] = corners[i][1] * Math.pow(2, scale_basis - 5);
    positions[i3 + 2] = -1;
  }

  // Create a Float32Array for RGBA vertex colour
  const colors = new Float32Array((phone_ids.length + 4) * 4);
  for (let i = 0; i < phone_ids.length; i++) {
    const i4 = i * 4;

    // Check if we've explored this phone
    let explored = 0;
    if (
      my_phones.some((id) => {
        return id == phone_ids[i];
      })
    ) {
      explored = 1;
    }

    // #dadadaff if unexplored, #dadada00 if explored

    colors[i4 + 0] = 0.6;
    colors[i4 + 1] = 0.6;
    colors[i4 + 2] = 0.6;
    colors[i4 + 3] = 1 - explored;
  }

  // And make the corners unexplored
  for (let i = 0; i < 4; i++) {
    const i4 = (i + phone_ids.length) * 4;

    colors[i4 + 0] = 0.55;
    colors[i4 + 1] = 0.55;
    colors[i4 + 2] = 0.55;
    colors[i4 + 3] = 1;
  }

  // Read the triangles into an array
  // (We do this because each triangle is the vertex list followed by area, and
  // we just want to fully flatten it out)
  let triangles = triangulation['triangles'];
  let tris = [];
  for (let i = 0; i < triangles.length; i++) {
    const i3 = i * 3;

    tris[i3 + 0] = triangles[i][0] - 1;
    tris[i3 + 1] = triangles[i][1] - 1;
    tris[i3 + 2] = triangles[i][2] - 1;
  }

  // Put all those arrays into some Buffer Geometry
  const fog_geometry = new THREE.BufferGeometry();
  fog_geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  fog_geometry.setAttribute('color', new THREE.BufferAttribute(colors, 4));
  fog_geometry.setIndex(tris);

  // Make a material that's about 85% brightness and wireframe
  // (About the same colour as the unexplored dots)
  const wireframe_material = new THREE.MeshBasicMaterial({
    vertexColors: true,
    transparent: true,
    color: 0xdddddd,
    wireframe: true,
  });

  // Add the wireframe to the scene at Z=1
  const wireframe = new THREE.Mesh(fog_geometry, wireframe_material);
  wireframe.translateZ(1);
  scene.add(wireframe);

  // Manually add those corner triangles
  const right_most = 6801 - 1;
  const top_most = 12619 - 1;
  const left_most = 2363 - 1;
  const bottom_most = 13487 - 1;

  // Rightmost to corners
  tris.push(corner_ids[TOP_RIGHT], corner_ids[BOTTOM_RIGHT], right_most);

  // Ones that link to top right
  tris.push(corner_ids[TOP_RIGHT], right_most, 3324 - 1);
  tris.push(corner_ids[TOP_RIGHT], 3324 - 1, top_most);

  // Topmost to corners
  tris.push(corner_ids[TOP_RIGHT], corner_ids[TOP_LEFT], top_most);

  // Ones that link to top left
  tris.push(corner_ids[TOP_LEFT], top_most, 12420 - 1);
  tris.push(corner_ids[TOP_LEFT], 12420 - 1, 5436 - 1);
  tris.push(corner_ids[TOP_LEFT], 5436 - 1, 5754 - 1);
  tris.push(corner_ids[TOP_LEFT], 5754 - 1, left_most);

  // Leftmost to corners
  tris.push(corner_ids[TOP_LEFT], corner_ids[BOTTOM_LEFT], left_most);

  // Ones that link to bottom left
  tris.push(corner_ids[BOTTOM_LEFT], left_most, 1315 - 1);
  tris.push(corner_ids[BOTTOM_LEFT], 1315 - 1, 10825 - 1);
  tris.push(corner_ids[BOTTOM_LEFT], 10825 - 1, bottom_most);

  // Bottommost to corners
  tris.push(corner_ids[BOTTOM_LEFT], corner_ids[BOTTOM_RIGHT], bottom_most);

  // Ones that link to bottom right
  tris.push(corner_ids[BOTTOM_RIGHT], bottom_most, 12574 - 1);
  tris.push(corner_ids[BOTTOM_RIGHT], 12574 - 1, right_most);

  // Make extended fog geometry that goes to the edge
  const extended_fog_geometry = new THREE.BufferGeometry();
  extended_fog_geometry.setAttribute(
    'position',
    new THREE.BufferAttribute(positions, 3),
  );
  extended_fog_geometry.setAttribute('color', new THREE.BufferAttribute(colors, 4));
  extended_fog_geometry.setIndex(tris);

  // Make a material just using the vertex Colors, for the fog itself
  const fog_material = new THREE.MeshBasicMaterial({
    vertexColors: true,
    transparent: true,
    side: THREE.DoubleSide,
  });

  // Add the fog to the scene at Z=0
  const fog = new THREE.Mesh(extended_fog_geometry, fog_material);
  scene.add(fog);

  // Now that everything but tiles have been added, draw a frame so the user has
  // something to look at while the tiles load
  redrawScene();

  ////////////////////////////////////////////////////////////////////////////////////
  // TILE DRAWING
  let fetched_tiles = {};

  // Function that draws a specified tile to the scene
  // It gets added at -30 + Z
  async function draw_tile(x, y, z) {
    if (fetched_tiles[`${z}/${x}/${y}`]) {
      return;
    } else {
      fetched_tiles[`${z}/${x}/${y}`] = true;
    }

    let z_dif = Math.pow(2, z - scale_basis);
    let x_pos = (x + 0.5) / z_dif;
    let y_pos = (y + 0.5) / z_dif;

    const textureLoader = new THREE.TextureLoader();
    const spriteTexture = textureLoader.load(
      `https://tile.openstreetmap.org/${z}/${x}/${y}.png`,
      () => redrawScene(),
    );

    const spriteMaterial = new THREE.SpriteMaterial({
      map: spriteTexture,
      color: 0xffffff,
    });

    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(1 / z_dif, 1 / z_dif, 1);
    sprite.position.set(x_pos, -y_pos, -30 + z);
    sprite.layers.disableAll();
    sprite.layers.enable(z);

    scene.add(sprite);
  }

  const scaling_constant = 3.5;

  function update_tiles() {
    let camera_width = (camera.right - camera.left) / camera.zoom;
    let camera_height = (camera.top - camera.bottom) / camera.zoom;
    let size = Math.min(camera_width, camera_height);
    let zoom_level = Math.floor(scale_basis - Math.log2(size / scaling_constant));
    zoom_level = Math.max(Math.min(zoom_level, 14), 5);

    for (let z = 5; z <= zoom_level; z++) {
      let coords_scaling = Math.pow(2, z - scale_basis);
      let x_min = Math.floor(
        coords_scaling * (camera.position.x - camera_width / 2),
      );
      let x_max = Math.ceil(coords_scaling * (camera.position.x + camera_width / 2));
      let y_min = -Math.ceil(
        coords_scaling * (camera.position.y + camera_height / 2),
      );
      let y_max = -Math.floor(
        coords_scaling * (camera.position.y - camera_height / 2),
      );

      x_min = Math.max(Math.pow(2, z - BORDER_SCALE) * LEFT_BORDER, x_min);
      x_max = Math.min(Math.pow(2, z - BORDER_SCALE) * RIGHT_BORDER - 1, x_max);
      y_min = Math.max(Math.pow(2, z - BORDER_SCALE) * TOP_BORDER, y_min);
      y_max = Math.min(Math.pow(2, z - BORDER_SCALE) * BOTTOM_BORDER - 1, y_max);

      for (let lat = x_min; lat <= x_max; lat++) {
        for (let lon = y_min; lon <= y_max; lon++) {
          draw_tile(lat, lon, z);
        }
      }
    }

    camera.layers.disableAll();
    for (let layer = 0; layer <= zoom_level; layer++) {
      camera.layers.enable(layer);
    }
  }

  window.addEventListener('resize', update_tiles);

  controls.addEventListener('change', update_tiles);

  update_tiles();
}
