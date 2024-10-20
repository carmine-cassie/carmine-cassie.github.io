import * as THREE from 'three';
import { EXRLoader } from 'three/addons/loaders/EXRLoader.js';

// Get the canvas from the html document
const canvas = document.querySelector('#bgcanvas')

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
const stars = new THREE.TextureLoader().load('/assets/img/stars_distort.png');

const vertex = `
varying vec2 vUv;

void main() {
	vUv = uv;
	gl_Position = vec4(position, 1.0);
}
`

const frag = `
uniform float time;
uniform highp sampler2D grav_lens;
uniform sampler2D accretion_disk;
uniform sampler2D stars;
uniform float aspect;

varying highp vec2 vUv;

// Function that scales a value around 0.5
float scale(float value, float scale) {
	return ((value - 0.5) * scale) + 0.5;
}

void main()
{
	float brightness = 0.0;

	// This is our colour-ramp
	// TODO look into making this an array with a custom ramping function
	vec4 colour1 = vec4(0.05, 0.0, 0.02, 1.0); // ##29000f
	vec4 colour2 = vec4(0.61, 0.0, 0.2, 1.0); // #9c0033
	vec4 colour3 = vec4(0.84, 0.61, 0.64, 1.0); // #d69ca3
	vec4 colour4 = vec4(1.0, 1.0, 1.0, 1.0);   // 

	// The textures are 4:3, so I scale our aspect ratio to be relative
	// to 4:3s
	float ratio = aspect * 3.0 / 4.0;

	// We scale the uv to fit the images on the screen with correct aspect
	vec2 fitUv = vUv;
	if (ratio < 1.0) {
		// Taller than normal
		// So stretch out sideways
		fitUv.x = scale(vUv.x, ratio);
	} else if (ratio > 1.0) {
		// Shorter than normal
		// So stretch out upways
		fitUv.y = scale(vUv.y, 1.0 / ratio);
	}

	// The .exr black hole texture needs to be square to prevent weird
	// artefacting, so I do a quick modification
	vec2 squareUv = fitUv;
	squareUv.y = scale(squareUv.y, 0.75);

	// Read from the grav lens texture
	// The RG channels are our UV to index the disk texture
	highp vec3 lens_read = texture2D(grav_lens, squareUv).xyz;
	highp vec2 distortUv = lens_read.xy;

	if (distortUv != vec2(0.0, 0.0)) {
		// Matrix Mult stuff to rotate the accretion disk texture
		highp float rotation = time * -0.05;
		highp float sin_value = sin(rotation);
		highp float cos_value = cos(rotation);

		distortUv = (distortUv - 0.5) * mat2(cos_value, sin_value, -sin_value, cos_value) + 0.5;

		// Sample the Disk with the new rotated coords
		brightness = texture2D(accretion_disk, distortUv).x;

		// Mask with the grav lens' blue channel
		brightness *= lens_read.z;
	}

	// Add the stars
	brightness += texture2D(stars, fitUv).x;

	// Colorramp the brightness across our gradient
	float third = 1.0 / 3.0;
	if (brightness < third) {
		gl_FragColor = mix(colour1, colour2, brightness * 3.0);
	} else if (brightness < 2.0 * third) {
		gl_FragColor = mix(colour2, colour3, brightness * 3.0 - 1.0);
	} else {
		gl_FragColor = mix(colour3, colour4, brightness * 3.0 - 2.0);
	}

}
`

const material = new THREE.ShaderMaterial(
	{
		vertexShader: vertex,
		fragmentShader: frag,
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