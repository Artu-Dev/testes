//gobal scope

this.name = "Heisenberg";

function sayMyName() {
    // local scope
    console.log(this.name)
}

sayMyName();