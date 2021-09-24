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

function imprimirNombreMay(student){
  var nombre = student.nombre
  var edad = student.edad


console.log(`Hola soy ${nombre} mi edad es ${edad}`)

}

imprimirNombreMay(alumno)
imprimirNombreMay(alumna)