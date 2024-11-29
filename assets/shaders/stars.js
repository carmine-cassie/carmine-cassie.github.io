import * as THREE from 'three';
import { EXRLoader } from 'three/addons/loaders/EXRLoader.js';

// Get the canvas from the html document
const canvas = document.querySelector('#mycanvas')

// Build the renderer
const renderer = new THREE.WebGLRenderer({ canvas:canvas});
renderer.setPixelRatio( window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

// Scene setup - simplest possible
const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera();
const geometry = new THREE.PlaneGeometry( 2, 2 );

const accretion_disk = new THREE.TextureLoader().load('/assets/img/disk_texture_noisy.png');
const grav_lens = new EXRLoader().load('/assets/img/black_hole_uv6b.exr');
const stars = new THREE.TextureLoader().load('/assets/img/stars_norm.png');

const material = new THREE.ShaderMaterial(
	{
		vertexShader: document.getElementById( 'vertexShader' ).textContent,
		fragmentShader: document.getElementById( 'fragmentShader' ).textContent,
		uniforms: {
			accretion_disk: { type: "t", value: accretion_disk},
			grav_lens: { type: "t", value: grav_lens},
			stars: { type: "t", value: stars},
			time: { value: 0.0},
			aspect: { value: window.innerWidth / window.innerHeight}
		},
	}
)

// the cube is just something to display our shader on
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

const clock = new THREE.Clock();

function animate() {
	cube.material.uniforms['time']['value'] += clock.getDelta();
	renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );

// Update the uniforms on window resizea
function onWindowResize(){
	renderer.setPixelRatio( window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);
	cube.material.uniforms['aspect']['value'] = window.innerWidth / window.innerHeight;
}
window.addEventListener('resize', onWindowResize, false );