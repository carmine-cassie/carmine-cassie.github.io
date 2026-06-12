import * as THREE from 'three';
import { MapControls } from 'three/addons/controls/MapControls.js';

function project(lon, lat) {
	const lon_deg = lon
	const lat_rad = lat / 180 * Math.PI

	// We use a "default zoom" of 8, which just means our values will be between 0-256
	const n = Math.pow(2, 8)

	// Based on psuedocode from https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames
	const xtile = n * ((lon_deg + 180) / 360)
	
	// const ytile = n * (1 - (log(tan(lat_rad) + sec(lat_rad)) / π)) / 2
	const ytile = -n*(1 - ((Math.log(Math.tan(lat_rad) + (1/Math.cos(lat_rad))))/Math.PI))/2

	return [xtile, ytile]
}

// Get the canvas from the html document
const canvas = document.querySelector('#bgcanvas')

// Scene setup - simplest possible
const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera();
camera.position.set(0, 0, 5);


let x = 235.5;
let y = -153.6;
let zoom = 1;
// let zoom = 0.1;

// let x = 135;
// let y = -27;
// let zoom = 90;

// Build the renderer
const renderer = new THREE.WebGLRenderer({canvas:canvas, alpha:true, antialias: true});
// renderer.setPixelRatio( window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

const controls = new MapControls(camera, renderer.domElement);
controls.mouseButtons = {
	LEFT: THREE.MOUSE.PAN
}
controls.touches = {
	ONE: THREE.TOUCH.PAN,
	TWO: THREE.TOUCH.DOLLY_ROTATE
}
controls.screenSpacePanning = true;
controls.enableRotate = false;
controls.enableDamping = true;
controls.enableDamping = false;
controls.dampingFactor = 0.15;
controls.zoomToCursor = true;


const players = payphones["players"];
const phones = payphones["payphones"];

// todo use a url # and look this up via the players
const me = 3209;

const my_phones = past_captures["payphoneIds"]
const phone_coords = triangulation["coords"]


// todo, map through the phone coords here, at the start of the doc, and project them into mercator
Object.keys(phone_coords).forEach((id) => {
	phone_coords[id] = project(phone_coords[id][0], phone_coords[id][1])
})

const phone_ids = Object.keys(phone_coords)

const explored_coords = phone_ids.filter((id) => {
	return (my_phones.some((i) => {return i == id}))
}).map((id) => {
	return phone_coords[id]
})

const unexplored_coords = phone_ids.filter((id) => {
	return !(my_phones.some((i) => {return i == id}))
}).map((id) => {
	return phone_coords[id]
})

const e_positions = new Float32Array(explored_coords.length * 3)

for (let i = 0; i < explored_coords.length; i++) {
	const i3 = i * 3;

	e_positions[i3 + 0] = explored_coords[i][0]
	e_positions[i3 + 1] = explored_coords[i][1]
	e_positions[i3 + 2] = 0
}

const u_positions = new Float32Array(unexplored_coords.length * 3)

for (let i = 0; i < unexplored_coords.length; i++) {
	const i3 = i * 3;

	u_positions[i3 + 0] = unexplored_coords[i][0]
	u_positions[i3 + 1] = unexplored_coords[i][1]
	u_positions[i3 + 2] = 0
}

// Combine those positions into a point cloud, and add it to the scene
const e_geometry = new THREE.BufferGeometry();
e_geometry.setAttribute('position', new THREE.BufferAttribute(e_positions, 3));
const e_material = new THREE.PointsMaterial({color: 0xffffff, size: 1.5})
const e_points = new THREE.Points(e_geometry, e_material)
e_points.translateZ(3);
scene.add(e_points)

const u__geometry = new THREE.BufferGeometry();
u__geometry.setAttribute('position', new THREE.BufferAttribute(u_positions, 3));
const u_material = new THREE.PointsMaterial({color: 0x777777, size: 1.5})
const u_points = new THREE.Points(u__geometry, u_material)
u_points.translateZ(2)
scene.add(u_points)

const positions = new Float32Array(phone_ids.length * 3)

for (let i = 0; i < phone_ids.length; i++) {
	const i3 = i * 3;

	positions[i3 + 0] = phone_coords[phone_ids[i]][0]
	positions[i3 + 1] = phone_coords[phone_ids[i]][1]
	positions[i3 + 2] = -1

}

const colors = new Float32Array(phone_ids.length * 4)
for (let i = 0; i < phone_ids.length; i++) {
	const i4 = i * 4;

	let explored = 0;
	if (my_phones.some((id) => {return id == phone_ids[i]})) {
		explored = 1;
	}

	// colors[i4 + 0] = 0.8784313725490196
	// colors[i4 + 1] = 0.8745098039215686
	// colors[i4 + 2] = 0.8745098039215686
	colors[i4 + 0] = 0.6
	colors[i4 + 1] = 0.6
	colors[i4 + 2] = 0.6
	colors[i4 + 3] = (1 - explored)
}

let triangles = triangulation["triangles"]
let tris = []
for (let i = 0; i < triangles.length; i++) {
	const i3 = i * 3;

	tris[i3 + 0] = triangles[i][0] - 1
	tris[i3 + 1] = triangles[i][1] - 1
	tris[i3 + 2] = triangles[i][2] - 1
}

const fog_geometry = new THREE.BufferGeometry();
fog_geometry.setIndex(tris);
fog_geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
fog_geometry.setAttribute('color', new THREE.BufferAttribute(colors, 4));
const fog_material = new THREE.MeshBasicMaterial({vertexColors: true, transparent: true, side: THREE.DoubleSide})
const wireframe_material = new THREE.MeshBasicMaterial({vertexColors: true, transparent: true, color: 0xdddddd, wireframe: true})
const fog = new THREE.Mesh(fog_geometry, fog_material)
scene.add(fog)
const wireframe = new THREE.Mesh(fog_geometry, wireframe_material)
wireframe.translateZ(1);
scene.add(wireframe)

function height(z, y) {
	let n = Math.pow(2, z);
	let lat = Math.atan(Math.sinh(Math.PI * (1 - 2 * y / n))) * 180.0 / Math.PI
	let height = (Math.atan(Math.sinh(Math.PI * (1 - 2 * (y - 1) / n))) * 180.0 / Math.PI) - lat;
	return height;
}

function draw_tile(x, y, z) {
	let z_dif = Math.pow(2, z - 8)
	let x_pos = (x + 0.5) / z_dif;
	let y_pos = (y + 0.5) / z_dif;

	const textureLoader = new THREE.TextureLoader();
	const spriteTexture = textureLoader.load(`https://tile.openstreetmap.org/${z}/${x}/${y}.png`, () => renderer.render(scene, camera));
	const spriteMaterial = new THREE.SpriteMaterial({ 
		map: spriteTexture, 
		color: 0xffffff 
	});
	const sprite = new THREE.Sprite(spriteMaterial);
	sprite.scale.set(1/z_dif, 1/z_dif, 1);
	sprite.position.set(x_pos, -y_pos, -30 + z);

	scene.add(sprite)
	renderer.render(scene, camera)
}

for (let lat = 3766*1; lat <= 3770*1; lat++) {
	for (let lon = 2455*1; lon <= 2459*1; lon++) {
		draw_tile(lat, lon, 12)
	}
}

// Update the size on window resize
function onWindowResize(){
	let aspect = window.innerWidth / window.innerHeight;
	renderer.setSize(window.innerWidth, window.innerHeight)

	camera.bottom = y - (zoom / aspect / 2);
	camera.top = y + (zoom / aspect / 2);
	camera.left = x - (zoom / 2);
	camera.right = x + (zoom / 2);

	camera.updateProjectionMatrix();
	renderer.render(scene, camera)
}
window.addEventListener('resize', onWindowResize, false );
onWindowResize()


function animate () {

//   requestAnimationFrame(animate)

  controls.update()

  renderer.render(scene, camera)

}

// animate()

controls.addEventListener("change", () => renderer.render(scene, camera));