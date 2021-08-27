//Paso 1: Definir vector

const lista1 = [
    100,
    200,
    500,
    400000,
];
/* 
const mitadLista1 = lista1.length / 2;
 */

//Paso 2: definir la mitad de un vector.
const mitadLista1 = parseInt(lista1.length / 2);

//Paso 3: Definir si un número es par o impar

function esPar(numero){
    if(numero%2 === 0){
        return true;
    }else{
        return false;
    }

}

//Paso 4: definir una función 
function esPar(numero){
    if(numero%2 === 0){
        return true;
    }else{
        return false;}
    }

//Paso 5: Definir mediana

let mediana;
//Paso 6: Colocar los elementos

if (esPar(lista1.length)){
    //Necesitamos dos elementos
    // el promedio
    //Mediana
    const elemento1 = lista1[mitadLista1-1];
    const elemento2 = lista1[mitadLista1];
    mediana =  (elemento1 + elemento2)/2;
    console.log("Es par :" + mediana);
}else{
    //Posición mitad lista 1 dentro de lista 1
    //Mediana
    mediana = lista1[mitadLista1];
    console.log("Es impar : " + mediana);
} 
//RETO 1 traer la función promedio que elaboramos anteriormente y pongamos esto acá.

//RETO 2 Colocar todo dentro de una función

//RETO 3 Insertar en la web vía html

//RETO 3 Ordenar un array con el método SORT.



//Ordenar.


 
var puntos = [10, 2, 20, 1];
ordenados = puntos.sort();
console.log(ordenados);


var arr = [ 40, 1, 5, 200, -5, 7, 40 ];
function comparar ( a, b ){ return a - b; }
arr.sort(comparar); 
console.log(arr); 
console.log(arr.length);

var numbers = [ 40, 1, 5, 200, -5, 7, 40 ];
console.log(numbers.sort);
cnosole.log(numbers.sort(function (anterior, siguiente)
    if (prev > next){
        return 1;
    }
    if (prev < next){
        return -1;
    }
    return 0;
}));
