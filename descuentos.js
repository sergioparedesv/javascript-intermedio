/* const precioOriginal = 200;
const descuento = 15;

const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento)/100;

//Le enviaremos un objeto.
console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
}); */

//Paso 1: Vamos a cambiar el precio de 100 a 200
//Paso 2: ACTIVIDAD, Vamos a convertirlo en una función.

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    return precioConDescuento
}

//Paso 3: vamos a empezar con el html.

//Paso 5: Crearemos la función que se activa.

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El Precio con descuento son: " + precioConDescuento;
}

//Paso 6: En HTML vamos a enviarles el valor. VP12
