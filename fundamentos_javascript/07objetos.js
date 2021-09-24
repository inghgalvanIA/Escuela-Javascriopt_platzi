var alumno = { 
    nombre: "Hector",
    apellido: "Galvan",
    edad: 30
}

var alumna = {
    nombre: "Marcela",
    apellido: "Mesa",
    edad: 32
}

function imprimirNombreMay(n){
    n = n.toUpperCase()
    console.log(n)
}

function imprimirNombreyFecha(name,age){
    var { nombre } = name
    var { edad } = age
    console.log(` Hola  me llamo ${name} y tengo ${age} `)

}

imprimirNombreMay(alumno)
imprimirNombreMay(alumna)