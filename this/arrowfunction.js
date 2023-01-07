// this na arrow function
// pega o This do escopo anterior


this.name =  "Camilla"

const age = (age) => {
    const birthYear = (age) => {
        const year = 2022 - age
        console.log(this.name, year)
    }
    birthYear(age);
}

const dev ={
    sayMyName: () => {
        this.name = "Calistro"
        console.log(this.name);
    }
};

dev.sayMyName();

console.log(this.name); // alterou o global