import * as THREE from 'three';
import { CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';
import { scene } from './index.js';
import { panorama2 } from './panorama2.js';
import { display } from './display_sample.js';

//panorama image

const geometry = new THREE.SphereGeometry(500, 60, 40);
// invert the geometry on the x-axis so that all of the faces point inward
geometry.scale(- 1, 1, 1);

const texture = new THREE.TextureLoader().load('./double_panoramic.png');
const material = new THREE.MeshBasicMaterial({ map: texture });

export const panorama1 = new THREE.Mesh(geometry, material);

//navigation

// const navDiv = document.createElement('div');
// navDiv.className = 'label';
// navDiv.textContent = 'znacznik';
// navDiv.style.color = 'white';
// navDiv.style.fontSize = '1px'

const imageDiv = document.createElement('img');
imageDiv.className = 'imagenav';
imageDiv.src = './pap_circle_up.png'
imageDiv.height = '5';
imageDiv.width = '5';
imageDiv.style.visibility = 'visible'

const navLabel = new CSS3DObject(imageDiv);
navLabel.position.set(1, -30, -30);
navLabel.element.style.overflow = 'visible';



panorama1.add(navLabel)

// navigation actions

imageDiv.addEventListener('pointerdown', () => {
    console.log('click');
     scene.remove(panorama1);
     imageDiv.style.visibility='hidden';
     imageDivInfo.style.visibility='hidden';
     //infoDiv.style.visibility='hidden';

   
    scene.add(panorama2);
   
})

// info nav

const imageDivInfo = document.createElement('img');
imageDivInfo.className = 'imageInfo1';
imageDivInfo.src = './pap_spot_white.png'
imageDivInfo.height = '5';
imageDivInfo.width = '5';
imageDivInfo.style.visibility = 'visible'

const navLabelInfo = new CSS3DObject(imageDivInfo);
navLabelInfo.position.set(20, 0, -30);
navLabelInfo.element.style.overflow = 'visible';

panorama1.add(navLabelInfo)

//info display

// const infoDiv = document.createElement('div');
//   infoDiv.className = 'label';
//   infoDiv.textContent = 'znacznik';
//   infoDiv.style.width = '30px';
//   infoDiv.style.height = '30px';
//   infoDiv.style.color = 'black'
//   infoDiv.style.backgroundColor = 'white';
//   infoDiv.style.fontSize = '2px';

//   const infoLabel = new CSS3DObject(infoDiv);
//   infoLabel.position.set(20, 0, -30);
//   infoLabel.element.style.overflow = 'visible';
//   infoDiv.style.visibility='hidden';
  
//   navLabelInfo.add(infoLabel)

//info actiones

imageDivInfo.addEventListener('pointerdown', () => {
  console.log('click_info');
  //infoDiv.style.visibility='visible';
  imageDivInfo.style.visibility = 'hidden';
  document.body.appendChild(display);
  display.style.visibility='visible';

  
})

