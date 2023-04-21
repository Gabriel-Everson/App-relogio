const hour = document.getElementById('hr');
const minute = document.getElementById('min');
const seconds = document.getElementById('sec');
// ------
const dia = document.getElementById('data');

const relogio = setInterval(function tempo() {
    
    let data = new Date();
    let hr = data.getHours();
    let min = data.getMinutes();
    let sec = data.getSeconds();

    if(hr < 10){

        hr = '0' + hr;

    }
    if(min < 10){

        min = '0' + min;

    }
    if(sec < 10){

        sec = '0' + sec;

    }

    hour.textContent = hr;
    minute.textContent = min;
    seconds.textContent = sec;

});

const calendario = setInterval(function calen(){

    let data = new Date();
    let d = data.toLocaleDateString('pt-br');

    dia.textContent = d;
});