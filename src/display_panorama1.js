export const display = document.createElement('div');
display.className = 'display';
display.id = 'display';
//display.style.backgroundColor = 'rgba(0,177,255,' + (Math.random() * 0.5 + 0.25) + ')';
display.style.backgroundColor = 'rgba(255,255,255,0.5)';
display.textContent = "Valve model no.7";
display.style.color='black'
display.style.height = "520px";
display.style.width = "400px";
display.style.fontSize = "30px";
display.style.textAlign = "center";
display.style.lineHeight = "1.8";

const offButton = document.createElement('div')
offButton.className = 'offButton'
offButton.textContent= '[close details]'



const valvleDetails = document.createElement('div');
valvleDetails.className = 'details_valve';
valvleDetails.textContent= 'The 1/2 in. SharkBite Push-to-Connect Ball Valve is the easiest way to install a new or replacement shut-off ball valve. The single lever control allows for easy operation and the valve is perfect for potable water and hydronic applications where a shut-off is needed. SharkBite fittings allow you to join copper, CPVC or PEX pipe in any combination with no soldering, clamps, unions or glue. Just insert the pipe and the stainless steel teeth bite down and grip tight, while a specially formulated O-ring compresses to create a perfect seal.'
display.appendChild(valvleDetails);
display.appendChild(offButton);

offButton.addEventListener("click", function() {
   
    const dispalyDetails = document.getElementsByClassName('display')[0];
    dispalyDetails.style.visibility='hidden';

    const imageDivInfo = document.getElementsByClassName('imageInfo1')[0];
    imageDivInfo.style.visibility='visible';

})