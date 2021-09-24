var hector = {
    nombre: "Héctor",
    apellido: "Galván",
    edad: 17 
}

const MAYOR_EDAD = 18;

function Mayoria_Edad(persona){
    return persona.edad >= MAYOR_EDAD;
}

function Imprimir_Edad(persona){

    console.log(`${persona.nombre} tiene ${persona.edad} por lo cual :` )
    if(Mayoria_Edad(persona)){
        console.log("Es mayor de edad")
    }
    else{
        console.log("Es menor de edad")
    }
}


Imprimir_Edad(hector)