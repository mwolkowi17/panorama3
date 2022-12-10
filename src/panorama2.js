import * as THREE from 'three';
import { CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';

const geometry = new THREE.SphereGeometry(500, 60, 40);
// invert the geometry on the x-axis so that all of the faces point inward
geometry.scale(- 1, 1, 1);

const texture = new THREE.TextureLoader().load('./kawiarnia5.png');
const material = new THREE.MeshBasicMaterial({ map: texture });

export const panorama2 = new THREE.Mesh(geometry, material);



const imageDiv = document.createElement('img');
imageDiv.className = 'imagenav2';
imageDiv.src = './pap_circle_up.png'
imageDiv.height='5';
imageDiv.width ='5';

const navLabel = new CSS3DObject(imageDiv);
navLabel.position.set(1, -30, 30);
navLabel.element.style.overflow = 'visible'



panorama2.add(navLabel)