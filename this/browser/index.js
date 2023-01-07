this.name = "Heisenberg";

function sayMyName() {
    console.log(this.name);
}
//no navegador, a função acima pegaria o name do scopo global, se usar o strict mode, isso nao ocorrerá

//sem strict contexto de função ele vai pegar o global
// e no contexto de metodo ele nao vai pegar o global

//quando o strict ta ativo ele isola tudo

const user = {
    name: "Walter white",
    sayMyName: function() {
        console.log(this.name);
    }
}

user.sayMyName()

console.log(window); //window no naveador é a mesma coisa que this