//console.log("Hola mundo"); //4

//5
//código del cuadrado //5
console.group("Cuadrados"); //6
const ladoCuadrado = 5;

console.log("Los lados del cuadrado son :"+ ladoCuadrado);
const perimetroCuadrado = ladoCuadrado*4;

console.log("El perimetro es " + perimetroCuadrado + "cm");
const areaCuadrado = ladoCuadrado*ladoCuadrado
console.log("El área es " + areaCuadrado + "cm^2");

console.groupEnd();

//código del triangulo //5
console.group("Triángulo"); //6
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
console.groupEnd();


//Tarea Construir el Código circulo 5 minutos  //7
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
console.groupEnd();
