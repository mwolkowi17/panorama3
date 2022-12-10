import * as THREE from 'three';
import {  CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';

const geometry = new THREE.SphereGeometry(500, 60, 40);
// invert the geometry on the x-axis so that all of the faces point inward
geometry.scale(- 1, 1, 1);

const texture = new THREE.TextureLoader().load('./double_panoramic.png');
const material = new THREE.MeshBasicMaterial({ map: texture });

const navDiv = document.createElement('div');
navDiv.className = 'label';
navDiv.textContent = 'znacznik';
navDiv.style.color = 'white';
navDiv.style.fontSize = '1px'

const imageDiv = document.createElement('img');
imageDiv.className = 'imagenav';
imageDiv.src = './pap_circle_up.png'
imageDiv.height='5';
imageDiv.width ='5';
imageDiv.style.visibility = 'visible'

const navLabel = new CSS3DObject(imageDiv);
navLabel.position.set(1, -30, -30);
navLabel.element.style.overflow = 'visible';

export const mesh = new THREE.Mesh(geometry, material);

mesh.add(navLabel)

