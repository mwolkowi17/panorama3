import * as THREE from 'three';
import {  CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';

export function create_nav(x,y,z,nameofclass){

    const imageDiv = document.createElement('img');
    imageDiv.className = nameofclass;
    imageDiv.src = './pap_circle_up.png'
    imageDiv.height='5';
    imageDiv.width ='5';
    imageDiv.style.visibility = 'visible'

    const navLabel = new CSS3DObject(imageDiv);
    navLabel.position.set(x,y,z);
    navLabel.element.style.overflow = 'visible';

    return navLabel
}