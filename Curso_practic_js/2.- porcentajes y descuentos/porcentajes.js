
function cuadrado(){
    let costo = parseFloat((document.getElementById("costo_producto").value));
    let descuento = parseFloat((document.getElementById("descuento").value));
    let  descuento_num = descuento * costo / 100
    let total = costo - descuento_num

    console.log(descuento_num)
    console.log(total)

    document.getElementById("descuento_total").innerHTML = " El descuento es" + descuento_num;
    document.querySelector("#el_total").innerHTML = `El total a pagar es de : ${total}`
    
}


function limpiar(){
    document.getElementsByTagName("miformulario").reset();
}


