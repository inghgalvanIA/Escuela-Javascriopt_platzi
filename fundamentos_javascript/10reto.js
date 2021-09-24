var Hector = {
    nombre: "Héctor",
    apellido: "Galván",
    edad: 17
}

function imprimirMayoria(persona){
    console.log(` ${persona.nombre} tiene ${persona.edad} por lo cual: `)

    if(persona.edad >= 18){
        console.log("Es mayor de edad")
    }

    else{
        console.log("Es menor de edad")
    }
}

imprimirMayoria(Hector)

