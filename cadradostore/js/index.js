let http = new XMLHttpRequest();

http.open('get', 'js/json/items.json', true);

http.send();

http.onload = function(){
    if(this.readyState == 4 && this.value == 200) {
        let coisas = JSON.parse(this.responseText);
        
    }
}


if (!JSON.parse(localStorage.getItem("localCart"))) {
    alert('ndad')
    var items = [
    {
        id: 0,
        nome: 'maconha na maconha',
        img: 'img/catnip.jpg',
        quantidade: 0,
        price: 12
    },
    {
        id: 1,
        nome: 'manteiga',
        img: 'img/manteiga.jpg',
        quantidade: 0,
        price: 7
    },
    {
        id: 2,
        nome: 'cesio-137',
        img: 'img/cesio.jpg',
        quantidade: 0,
        price: 88
    },
    {
        id: 3,
        nome: 'metanfetamina',
        img: 'img/metanfetamina.jpg',
        quantidade: 0,
        price: 89
    },
    {
        id: 4,
        nome: 'Clube do Zap',
        img: 'img/clube do zap.png',
        quantidade: 0,
        price: 24.5
    },
    {
        id: 5,
        nome: 'Gato Homossexual',
        img: 'img/homosexual.jpg',
        quantidade: 0,
        price: 69.69
    },
    {
        id: 6,
        nome: 'Conhecimento',
        img: 'img/conhecumento.jpg',
        quantidade: 0,
        price: 42
    },
    {
        id: 7,
        nome: 'Maçã',
        img: 'img/maca.jpg',
        quantidade: 0,
        price: 2.25
    },
    {
        id: 8,
        nome: 'Tyler o criador',
        img: 'img/tyler.jpg',
        quantidade: 0,
        price: 18
    },
    ];
} else {    
    items = JSON.parse(localStorage.getItem('localCart'))
}

function tutorialso() {
/*
localStorage.setItem("localCart", JSON.stringify(items)); // salvar objeto, mas pra recuperar vai vir como string, e voce nao vai ter como utilizar ele
const LocalStorageCart  = localStorage.getItem("localCart");
const cartObject = JSON.parse(LocalStorageCart); // converte de volta para objeto

console.log(cartObject);
*/
/*
localStorage.setItem("localCart", items); // INSERIR DADOS

const LocalStorageCart  = localStorage.getItem("localCart"); // resgatar dado

console.log(LocalStorageCart);

//remover item
localStorage.removeItem("localCart")
*/

/*
//Limpar todos os items

localStorage.setItem("a", 1);
localStorage.setItem("b", 2);
// console.log(typeof localStorage.getItem("a")); // idenpendente do dado, ele vai cair como uma string

localStorage.clear(); 
*/

/* 
//RESGATANDO DADO QUE NAO EXISTE
    const lastName = localStorage.getItem("lastlame");
    console.log(lastName); //null

    if (!lastName) {
        console.log("Sem sobrenome!")
    }
*/
// sessionStorage funciona igual mas quando a pagina é fechada os dados sao limpados
}

let cartContent = document.querySelector('#cart');


fotmatPrice = (item) => {
    return item.toLocaleString("pt-BR",{
        style: 'currency',
        currency:'BRL'
    });
}

atualizarCart = () => {
    localStorage.setItem("localCart", JSON.stringify(items));
    let totalPrice = 0;
    var containerCart = document.getElementById('cart-window');
    let totalPriceSpan = document.querySelector('.total-priceSpan');

    containerCart.innerHTML = "";
    items.map((item)=> {
        if (item.quantidade > 0){
            containerCart.innerHTML +=  `
            <div class="cartItem">
                <div class="item-name">
                    <img src="`+item.img+`" class="cartItem-img"/>
                    <p>`+item.nome+`</p> 
                </div>
                <div class="item-data">
                    <p>quantidade: <span class=quantidade-span>`+item.quantidade+`</span></p>
                    <span>`+fotmatPrice(item.price)+`</span>
                </div>
            </div>
            `;
        }
        totalPriceSpan.innerHTML = `
        <span>`+fotmatPrice((totalPrice += item.price*item.quantidade))+`</span>
        `;


    });
};

limparCart = () => {
    localStorage.clear();
    items.forEach(e => {
        e.quantidade = 0;
    });
    totalPrice = 0;
    atualizarCart();
}

iniciarloja = () => {
    atualizarCart();
    var containerProducts = document.getElementById('products');
    items.map((item)=> {
        containerProducts.innerHTML +=  `
        <div class="product-single">
            <img src="`+item.img+`"/>
            <span>`+fotmatPrice(item.price)+`</span>
            <h2>`+item.nome+`</h2>
            <a keys="`+item.id+`" id="addCart">
                <i class="fa-solid fa-cart-plus"></i>
                Adicionar ao carrinho
            </a>
        </div>
        `;
    });
}

iniciarloja();


const links = document.querySelectorAll('#addCart'); // selecionar os links
const clearCartBtn = document.querySelector('.cart-btn');


for(i = 0; i < links.length; i++){ //adicionar os clinks nos links
    links[i].addEventListener('click', function(){
        let key = this.getAttribute('keys');
        items[key].quantidade++;
        atualizarCart();
        return false;
    });
};


clearCartBtn.addEventListener('click', function(){
    limparCart();
})

cartContent.addEventListener('mouseenter', function(){
    cartContent.querySelector('.cart-window-content').classList.remove('hide');
    cartContent.querySelector('.fa-solid').classList.add('cartopen');
});
cartContent.addEventListener('mouseleave', function(){
    cartContent.querySelector('.cart-window-content').classList.add('hide');
    cartContent.querySelector('.fa-solid').classList.remove('cartopen')
});


const  header = document.querySelector('#header');
const headerClasslist = header.classList;

window.addEventListener('scroll', () => {
    if (window.scrollY >= 300) {
        if (!headerClasslist.contains('header-hide')){
        headerClasslist.add('header-hide');
        listSearch.classList.add('hide');
        }
    } else {
        if (headerClasslist.contains('header-hide')) {
            headerClasslist.remove('header-hide');
        }
    }
});

//theme

const clrGreen01 = getComputedStyle(document.documentElement).getPropertyValue('--clr-green-01');
const clrGreen02 = getComputedStyle(document.documentElement).getPropertyValue('--clr-green-02');
const clrGreen03 = getComputedStyle(document.documentElement).getPropertyValue('--clr-green-03');

const themebtn = document.querySelector('#themebtn');
const dark = document.querySelector('#darkTheme');
const ligth = document.querySelector('#ligthTheme');
let currentTheme = "ligth";

themebtn.addEventListener('click', () => {
    dark.classList.toggle('hide');
    document.body.style.setProperty('--clr-white02', 'black');
    document.body.style.setProperty('--clr-white01', '#151515');
    document.body.style.setProperty('--clr-white01b', '#303030');
    document.body.style.setProperty('--clr-black', 'white');
    document.body.style.setProperty('--clr-green01', '#192323');
    document.body.style.setProperty('--clr-green02', '#91adad');
    document.body.style.setProperty('--clr-greenbg', '#2c4243');
    document.body.style.setProperty('--clr-green03', '#497174');
    document.body.style.setProperty('--clr-orange02', '#ff3e0b');
    document.body.style.setProperty('--clr-orange03', '#fff');
    if (!dark.classList.contains('hide')){
        document.body.style.removeProperty('--clr-white01');
        document.body.style.removeProperty('--clr-white01b');
        document.body.style.removeProperty('--clr-white02');
        document.body.style.removeProperty('--clr-black');
        document.body.style.removeProperty('--clr-green01');
        document.body.style.removeProperty('--clr-green02');
        document.body.style.removeProperty('--clr-green03');
        document.body.style.removeProperty('--clr-greenbg');
        document.body.style.removeProperty('--clr-orange02');
        document.body.style.removeProperty('--clr-orange03');
    }
    ligth.classList.toggle('hide');
});

//seacrh

t = "";
const listSearch = document.querySelector('#listSearch');
let listSearchItems = items.map((item) => item.nome );
const searchtxt = document.querySelector('#searchtxt');
const seacrhClearbtn = document.querySelector('.clearbtn');

seacrhClearbtn.onclick = function() {
    searchtxt.value = "";
    seacrhClearbtn.style.opacity = '0';
};

for (i in listSearchItems) {
    t += `<li class="SearchItem">`+listSearchItems[i]+`</li>`;
    listSearchItems[i] = listSearchItems[i].toLowerCase();
}
listSearch.innerHTML += t;

searchtxt.addEventListener('keyup',function(e){
    t = this.value;
    regSearch = new RegExp(t,"g");
    for(i in listSearchItems) {
        if (listSearchItems[i].match(regSearch)) {
            listSearch.children[i].removeAttribute("style");
        } else {
            listSearch.children[i].style.display = "none";
        }
    }

    if(t == "") {
        listSearch.classList.add('hide')
        seacrhClearbtn.style.opacity = '0';
    } else {
        listSearch.classList.remove('hide');
        seacrhClearbtn.style.opacity = '1';
    }
});
seacrhClearbtn.style.opacity = '0';
listSearch.classList.add('hide')