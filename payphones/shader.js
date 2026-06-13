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

////////////////////////////////////////////////////////////////////////////////////
// PROJECTION FUNCTION
// Reprojects from equirectangular to xy web mercator coords from 0-256.
// y value goes from 0 to -256 so that downwards works fine from camera
function project(lon, lat) {
  const lon_deg = lon;
  const lat_rad = (lat / 180) * Math.PI;

  // We use a "default zoom" of 8, which just means our values will be between 0-256
  const n = Math.pow(2, 8);

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
  30,
);
camera.up.set(0, 1, 0);

// Get the camera pos from local storage, with sensible defaults
camera.position.set(
  localStorage.getItem('cameraX') || 224,
  localStorage.getItem('cameraY') || -149,
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

// Update the size on window resize
function redrawScene() {
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
const positions = new Float32Array(phone_ids.length * 3);
for (let i = 0; i < phone_ids.length; i++) {
  const i3 = i * 3;

  positions[i3 + 0] = phone_coords[phone_ids[i]][0];
  positions[i3 + 1] = phone_coords[phone_ids[i]][1];
  positions[i3 + 2] = -1;
}

// Create a Float32Array for RGBA vertex colour
const colors = new Float32Array(phone_ids.length * 4);
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

  // #cbcbcbff if unexplored, #cbcbcb00 if explored
  colors[i4 + 0] = 0.6;
  colors[i4 + 1] = 0.6;
  colors[i4 + 2] = 0.6;
  colors[i4 + 3] = 1 - explored;
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

// Make a material just using the vertex Colors, for the fog itself
const fog_material = new THREE.MeshBasicMaterial({
  vertexColors: true,
  transparent: true,
  side: THREE.DoubleSide,
});

// Add the fog to the scene at Z=0
const fog = new THREE.Mesh(fog_geometry, fog_material);
scene.add(fog);

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

// Now that everything but tiles have been added, draw a frame so the user has
// something to look at while the tiles load
redrawScene();

////////////////////////////////////////////////////////////////////////////////////
// TILE DRAWING
// Function that draws a specified tile to the scene
// It gets added at -30 + Z
function draw_tile(x, y, z) {
  let z_dif = Math.pow(2, z - 8);
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

  scene.add(sprite);
}

// Draw some sydney tiles
// TODO replace this, add a thing where on camera move we figure out where we are
// and decide if we need more tiles, and draw them if so.
// Maybe there's a function to get top left, top right, and ofc we need to figure out
// Zoom level scaling etc.
for (let lat = 3766 * 1; lat <= 3770 * 1; lat++) {
  for (let lon = 2455 * 1; lon <= 2459 * 1; lon++) {
    draw_tile(lat, lon, 12);
  }
}
