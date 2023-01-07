//context inside a method
// nao pega o this global,  somente do objeto idependete do modo estrito

this.name = "Celeste";

const dev = {
    name: "Cleiton",
    sayMyName: function() { 
        console.log(this.name)// Cleiton
    }
};

dev.sayMyName();