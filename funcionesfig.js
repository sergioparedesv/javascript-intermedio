//console.log("Hola mundo"); //4

//5
//código del cuadrado //5
/* console.group("Cuadrados"); //6
const ladoCuadrado = 5;

console.log("Los lados del cuadrado son :"+ ladoCuadrado);
const perimetroCuadrado = ladoCuadrado*4;

console.log("El perimetro es " + perimetroCuadrado + "cm");
const areaCuadrado = ladoCuadrado*ladoCuadrado
console.log("El área es " + areaCuadrado + "cm^2");

console.groupEnd(); */

//Convertir las variables en funciones

//Funcion Perimetro Cuadrado  //9!!!!!!!!!!!
function perimetroCuadrado(lado){
    return lado * 4;
}

//Funcion Area Cuadrado //10!!!!!!!!
function areaCuadrado(lado){
    return lado * lado
}

//11!!!!!!!!! Crea una función que calcule el perimetro y área de un triangulo.

//llamar la función. 

//código del triangulo //5
/* console.group("Triángulo"); //6
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.65;
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = baseTriangulo * alturaTriangulo /2
console.log("Los lados de mi triangulo miden :" 
+ ladoTriangulo1 
+ "cm, " 
+ ladoTriangulo2
+ "cm, " 
+ baseTriangulo 
+ "cm"
+ alturaTriangulo
+ "cm");
console.log("Perimetro triangulo :" + perimetroTriangulo + "cm");
console.log("Area del triangulo : " + areaTriangulo + "cm^2");
console.groupEnd(); */

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) /2;
}


/* //Tarea Construir el Código circulo 5 minutos  //7
console.group("Círculos");
//Radio
const radioCirculo = 4;
//Diametro
const diametroCirculo = radioCirculo * 2;
//Pi
const PI = Math.PI;
//Circunferencia 
const perimetroCirculo = diametroCirculo * PI;
//Área
const areaCirculo = radioCirculo * radioCirculo * PI;
console.log("Diametro del circulo :"+ diametroCirculo);
console.log("Perimetro del circulo :"+ perimetroCirculo);
console.log("Área del circulo :"+ areaCirculo);
console.groupEnd(); */


//12!!!!!!!!! 
const PI = Math.PI;

function diametroCirculo(radio){
    return radio * 2;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return radio**2 * PI;
}

// Aquí interactuamos con el html.
//document.get ElementById
//Obtener del documento un elemento por/con id
//Ejericicio  document.getElementById("InputCuadrado")

//13!!!!!!!!! 
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

//14!!!!!!!!!!! Reto, crear formularios para los elementos triangulos y circulos.


