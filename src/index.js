
import * as THREE from 'three';
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls';
import { panorama1 } from './panorama1';
import { CSS3DRenderer } from 'three/addons/renderers/CSS3DRenderer.js';


export const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);
//document.body.appendChild(display);


const labelRenderer = new CSS3DRenderer();
labelRenderer.setSize(window.innerWidth, window.innerHeight);

labelRenderer.domElement.style.position = 'absolute';
labelRenderer.domElement.style.top = '0px';
document.body.appendChild( labelRenderer.domElement );

scene.background = new THREE.Color(0x000000);


scene.add(panorama1);

camera.position.z = 5;
const controls = new OrbitControls(camera, labelRenderer.domElement);
controls.update();
controls.enableZoom=false;

const animate = function () {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    labelRenderer.render(scene, camera);
}

animate();
