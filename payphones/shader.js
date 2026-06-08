import * as THREE from 'three';

// Get the canvas from the html document
const canvas = document.querySelector('#bgcanvas')

// Scene setup - simplest possible
const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera();
camera.position.set(0, 0, 5);

let x = 151.2;
let y = -33.86778;
let zoom = 0.32;

// let x = 135;
// let y = -27;
// let zoom = 90;

// Build the renderer
const renderer = new THREE.WebGLRenderer({canvas:canvas, alpha:true});
// renderer.setPixelRatio( window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

const players = payphones["players"];
const phones = payphones["payphones"];
const me = 3209;

// const my_phones = phones
// 	.filter((payphone) => {
// 		return payphone[3] == me;
// 	})	.map((payphone) => {
// 		return payphone[0]
// })

const my_phones = past_captures["payphoneIds"]

// Create the array of points
// TODO replace this with uncaptured phones
const count = 5000

const phone_coords = triangulation["coords"]
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
const e_material = new THREE.PointsMaterial({color: 0xff0000, size: 2})
const e_points = new THREE.Points(e_geometry, e_material)
scene.add(e_points)

const u__geometry = new THREE.BufferGeometry();
u__geometry.setAttribute('position', new THREE.BufferAttribute(u_positions, 3));
const u_material = new THREE.PointsMaterial({color: 0xffffff, size: 1		})
const u_points = new THREE.Points(u__geometry, u_material)
scene.add(u_points)

// TODO add triangle meshes
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

	colors[i4 + 0] = 0
	colors[i4 + 1] = 0
	colors[i4 + 2] = 0
	colors[i4 + 3] = 1 - explored
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
const fog = new THREE.Mesh(fog_geometry, fog_material)
scene.add(fog)

// TODO add map tiles

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

//   points.rotation.y += 0.002

  renderer.render(scene, camera)

}

animate()