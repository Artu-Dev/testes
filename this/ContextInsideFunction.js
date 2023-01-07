// context inside a function
// nao pega o this globalm mas se nao estiver no modo estrito, SIM"

this.name = "Carl Jhonson";


function sayMyName() {
    console.log(this.name);
}

sayMyName()