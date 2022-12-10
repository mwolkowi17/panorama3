import * as THREE from 'three';
import {  CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';

export function create_info(x,y,z,nameofclass){
    const imageDiv = document.createElement('img');
    imageDiv.className = nameofclass;
    imageDiv.src = './pap_spot_white.png'
    imageDiv.height='5';
    imageDiv.width ='5';
    imageDiv.style.visibility = 'visible'

    const navLabel = new CSS3DObject(imageDiv);
    navLabel.position.set(x,y,z);
    navLabel.element.style.overflow = 'visible';
    
    imageDiv.addEventListener('pointerdown', () => { 
        console.log('click2');

        const infoDiv = document.createElement('div');
        infoDiv.className = 'label';
        infoDiv.textContent = 'znacznik';
        infoDiv.style.color = 'white';
        infoDiv.style.fontSize = '1px'

        const infoLabel = new CSS3DObject(infoDiv);
        infoLabel.position.set(x+2, y,z);
        infoLabel.element.style.overflow = 'visible';
        navLabel.add(infoLabel)
        imageDiv.style.visibility = 'hidden'
        

    })
    return navLabel
}