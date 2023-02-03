const cookie = document.getElementById('cookieIMG');

const outcookie = document.getElementById('outcookie'); 
const spanBoostPrice = document.getElementById("boostPrice");
const btnBoost = document.getElementById('btnBoost');
const btnAuto = document.getElementById('btnAuto');
const SpancookiePrice =  document.getElementById('cookiePrice');
const autoPrice =  document.getElementById('autoPrice');

const progressAuto =  document.getElementById('progressAuto');
const progressBoost =  document.getElementById('progressBoost');


let cookieCounter = 0;
let cookieValue = 1;
let boostPrice =  10;
let onBoost = false;

increaseCookie = () => {
    cookieCounter += cookieValue;
    printCookies()
    efeitos()
    numeros(cookieValue)
}

boostCookie = () => {
    if(cookieCounter >= boostPrice) {
        cookieCounter -= boostPrice; 
        boostPrice += Math.floor(boostPrice*2.8);
        cookieValue += Math.ceil(cookieValue*2.5);
        onBoost =  true;
        setTimeout(function(){
            cookieValue = Math.ceil(cookieValue/1.6);
            onBoost = false;
            Check();
            printCookies()
            progressBoost.value = 0;
            clearInterval(BoostInterval)
        }, 8000)
        let BoostInterval = setInterval(() => {
            progressBoost.value += 1;
        }, 100)


        printCookies()
    }
}

autoCookies = () => {
    if(cookieCounter >= 100) {
        cookieCounter -= 100;
        printCookies()
        let progressInterval = setInterval(() => {
            progressAuto.value += 1
        },100)
        let cookieInterval = setInterval(() => {
            cookieCounter += 1.7
            printCookies()
            numeros(1.7)
            efeitos()
            progressAuto.value = 0
        },1000)
        btnAuto.disabled = true;
    }
}


printCookies = () => {
    outcookie.innerHTML = cookieCounter.toLocaleString("pt-BR", {
        style: 'currency', currency: 'Cks', currencyDisplay: "name"
    });
    spanBoostPrice.innerHTML = boostPrice;
    SpancookiePrice.innerHTML = cookieValue;
    Check();
}

Check = () => {
    if(cookieCounter >= boostPrice && !onBoost) {
        btnBoost.disabled = false
    } else {
        btnBoost.disabled = true;
    }

    if(cookieCounter >= 100) {
        btnAuto.disabled = false;
    } else {
        btnAuto.disabled = true;
    }
}

efeitos = () => {
    cookie.style.scale = 0.9;
    setTimeout(function(){
        cookie.style.scale = 1
    }, 100)
}

numeros = (valor) => {
    const number = document.createElement('div');
    number.textContent = `${valor}+`;
    number.style.top = `${Math.random() * 90}%`
    number.style.left = `${Math.random() * 90}%`
    number.classList.add('numbereffect')
    document.querySelector('.cookie').appendChild(number);

    const start = Date.now();
    const duration = 2000;
    const finish =  start + duration;

    const animate = () => {
        const time = Date.now();
        const progress =  time > finish ? 1 : (time - start) / duration;
        const currentTop = `${progress * 50}%`;
        number.style.top = currentTop;
        
        if (progress < 1){
            requestAnimationFrame(animate);
        } else {
            number.remove();
        }
} 
animate();
}

Check()
