const lista1 = [
    100,
    200,
    500,
    400000,
];
/* 
const mitadLista1 = lista1.length / 2;
 */
const mitadLista1 = parseInt(lista1.length / 2);



function esPar(numero){
    if(numero%2 === 0){
        return true;
    }else{
        return false;
    }

}

let mediana;

if (esPar(lista1.length)){
    //Necesitamos dos elementos
    // el promedio
    //Mediana
    const elemento1 = lista1[mitadLista1-1];
    const elemento2 = lista1[mitadLista1];
    mediana =  (elemento1 + elemento2)/2;
    console.log("Es par :" + mediana);

    

} else{
    //Posición mitad lista 1 dentro de lista 1
    //Mediana
    mediana = lista1[mitadLista1];
    console.log("Es impar : " + mediana);
} 
//RETO 1 traer la función promedio que elaboramos anteriormente y pongamos esto acá.

//RETO 2 Colocar todo dentro de una función

//RETO 3 Insertar en la web vía html

//RETO 3 Ordenar un array con el método SORT.

var puntos = [10, 2, 20, 1];
ordenados = puntos.sort();
console.log(ordenados);


var arr = [ 40, 1, 5, 200, -5, 7, 40 ];
function comparar ( a, b ){ return a - b; }
arr.sort( comparar ); 

const NUMBERS = [2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 9, -1, 20];
function comparar ( a, b ){ return a - b; }
NUMBERS.sort( comparar ); 