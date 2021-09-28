//con var esta asignada de manera clobal
var hello = "Hello";
let world = "HEllo world";
const helloWorld = "HELLO WORLD";



const anotherFunction = () =>{
    console.log(hello)
    console.log(world)
    console.log(helloWorld)
}

anotherFunction();

//con let y const nosotros no vamos a poder reasignar un valor con var si

// se puede reasignar una variable global desde una funcion pero es una mala funcion

const hello_World = () => {
    globalVAr = "I am global"
}

hello_World();

console.log(globalVAr)