// context function inside a function
//nao pega o This global


this.name =  "Camilla"

function age(age) {
    this.name =  "Joshua"

    function birthYear(age) {
        this.name = "Kian"
        const year = 2022 - age
        console.log(this.name, year)
        
    }

    birthYear(age);
    console.log(this.name); // teve o valor alterado
}

age(25);

console.log(this.name) // o escopo global nao foi alterado