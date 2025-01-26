const turOn = document.getElementById ('turnoOn');
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById ('lamp');

function lampOn () {
        lamp.src = './img/ligada.png';   
}
function lampOff () {
    lamp.src = './img/desligada.png';
}
function lampbroken () {
    lamp.src ='./img/quebrada.png';
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick',lampbroken)