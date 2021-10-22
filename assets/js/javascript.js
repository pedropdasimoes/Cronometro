let cron = new Date();
let h = 0;
let m = 0;
let s = 0;
let ms = 0;

var setar;
var total; 
var teste;
var btn;

function start(){
    pause();
    setar = setInterval(contar, 10);

    document.querySelector(".btnIniciar").style.top = "27%";
    btn = setTimeout(subirBtn, 200);
    function subirBtn(){        
        document.querySelector(".btnIniciar").style.top = "23.5%";
    }
}
function actionPause(){
    pause();
    pauseBtn();
}
function pause(){  
    clearInterval(setar);
}
function pauseBtn(){
    document.querySelector(".btnPausar").style.top = "27%";
    btn = setTimeout(subirBtn, 100);
    function subirBtn(){        
        document.querySelector(".btnPausar").style.top = "23.5%";
    }
}
function reiniciar(){
    h = 0;
    m = 0;
    s = 0;
    ms = 0;
    total = h+":"+m+":"+s+":"+ms;    
    document.querySelector(".hours").innerHTML = consert(h);
    document.querySelector(".minutes").innerHTML = consert(m);
    document.querySelector(".seconds").innerHTML = consert(s);
    document.querySelector(".miliseconds").innerHTML = consertMs(ms);

    document.querySelector(".btnZerar").style.top = "16%";
    btn = setTimeout(subirBtn, 100);
    function subirBtn(){        
        document.querySelector(".btnZerar").style.top = "13%";
    }
}

function consert(data){
    if (data<10){
        data = `0${data}`;
    }
    return data;
}
function consertMs(data){
    if (data<10){
        data = `00${data}`;
    }else if(data<100){
        data = `0${data}`;
    }
    return data;
}

function contar(){
     if ((ms += 10) == 1000){
        ms = 0;
        s++;
     }
     if (s == 60){
         s = 0;
         m++;
     }
     if (m == 60){
         m = 0;
         h++;
     }     
    total = h+":"+m+":"+s+":"+ms;
    document.querySelector(".hours").innerHTML = consert(h);
    document.querySelector(".minutes").innerHTML = consert(m);
    document.querySelector(".seconds").innerHTML = consert(s);
    document.querySelector(".miliseconds").innerHTML = consertMs     (ms);
}

