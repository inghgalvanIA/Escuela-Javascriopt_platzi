var Hector = {
    nombre:  "Hector",
    apellido: "Galvan",
    edad: 30,
    ingeniero: true,
    cocinero: false,
    gamer: true,
    guitarrista: false
}

function imprimirProfesiones (persona){
    console.log(`${persona.nombre} es:`)
    
    if(persona.ingeniero === true){
        console.log("ingeniero")

    }
 
    if(persona.cocinero === true){
        console.log("cocinero")
    }
    
    else{
        console.log("el no cocina ni por favor")
    }

    if(persona.gamer === true){
        console.log("gamer")
    }

    if(persona.guitarrista === true){
        console.log("guitarrista")
    }
    else{
        console.log("el no toca la guitarra")
    }

}

imprimirProfesiones(Hector)