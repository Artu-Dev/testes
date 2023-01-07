// Functions.call(this, arg1, arg2)
// call retorna o this do contexto que eu enviar

this.name = "camila";
this.age = 25;

function sayMyName() {
    this.age = arguments[0];
    this.likes = arguments[1];
    this.books = arguments[2];
    console.log(`Nome: ${this.name} idade: ${this.age} Likes: ${this.likes} Livros: ${this.books}`);
}

const dev = {
    name: "isabela",
    age: 35,
    sayMyAge: function() {
        console.log(this.age);
    }
}

//bind = ligar
//retorna a função chamada porem, ligada
//bound funçtion
const age = dev.sayMyAge.bind(this);// tirou do contexto original e "desligou" o sayMyAge 

age()


//const boundSayMyName = sayMyName.bind(dev)(19, 20.000, "HP lovecraft")


/*
sayMyName.call(this, 18);
sayMyName.call(dev, 21)

console.log(dev.age);
*/

// Functions.apply(this,[ arg1, arg2])
// call retorna o this do contexto que eu enviar

//sayMyName.apply(this, [18, 53.566, "Demonio de La Place"])

//arguments sao são um array, sao array like, mas nao chegam a ser de fato um array

function multiply() {
    const args = Array.from(arguments); //transformando em array
    return args.reduce((acc, item) => {
        return acc * item
    }, 1)
}


const total = multiply.apply(this, [2, 2, 3, 2])
//console.log(total);