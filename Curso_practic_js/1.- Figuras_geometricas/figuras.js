/*
Primer paso: definir las formulas
Segundo paso: implementar las formulas en javascript
tercer paso: crear funciones 
cuarto paso: integrar js por HTML

*/

function cuadrado(){
    var lado = parseFloat((document.getElementById("lado_cuadrado").value));
    var area_cuadrado = lado * lado;
    var perimetro_cuadrado = 4 * lado;
    document.getElementById("el_resultado_area").innerHTML = area_cuadrado + "cm";
    document.getElementById("el_resultado_perimetro").innerHTML = perimetro_cuadrado + "cm";
}

function triangulo(){
    var lado_a = parseFloat((document.getElementById("lado_a").value));
    var lado_b = parseFloat((document.getElementById("lado_b").value));
    var area_triangulo = (lado_b * lado_a)/2;
    var perimetro_cuadrado = (2 * lado_a) + lado_b;

    document.getElementById("el_resultado_area_tri").innerHTML = area_triangulo + "cm";
    document.getElementById("el_resultado_perimetro_tri").innerHTML = perimetro_cuadrado + "cm";
}

function circulo(){
    var radio = parseFloat((document.getElementById("radio").value));
    const pi = Math.PI;
    var area_circulo = pi * radio**2
    var perimetro_circulo = 2 * pi * radio

    document.getElementById("el_resultado_area_circulo").innerHTML = Math.round(area_circulo)  + "cm";
    document.getElementById("el_resultado_perimetro_circulo").innerHTML = Math.round(perimetro_circulo)  + "cm"

}

function limpiar(){
    document.getElementsByTagName("miformulario").reset();
}
