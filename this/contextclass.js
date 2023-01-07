class person {
    constructor(nome, apelido, gemas) {
        this._name = nome;
        this._apelido = apelido;
        this._gemas = gemas;
    }
    print(){
        console.log(`Player: ${this._name} 
Nome: ${this._apelido}
Gemas: ${this._gemas}`);
    }
}

const submit = document.getElementById('submit');
const nome = document.getElementById('inputName'); 
const nick = document.getElementById('inputApelido'); 
const gemas = document.getElementById('inputNumber'); 

const Allusers = []

submit.addEventListener('click', () => {
    const user = new person(nome.value, nick.value, gemas.value)
    Allusers.push(user)
    user.print()
})

