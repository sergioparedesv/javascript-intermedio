// Paso 1. Crear código que nos calcule el promedio en un for
// Actividad 1.Crear un for que recorra un array y sume sus elementos.
// Paso 2. Crear una función que nos calcule el promedio
// Actividad 2.Crear la función
// Paso 3. Implementar función reduces
// Actividad 3: Calcular factorial.

const lista = [
    100,
    200,
    300,
    500,
];

/* 
const lista = [
    100,
    200,
    300,
    500,
];

let sumaLista = 0;

for (let i = 0; i < lista.length; i++){
    sumaLista = sumaLista + lista[i];
}


const promedioLista1 = sumaLista/lista.length;
 */

//Paso 2 crear una función.

/* function calcularMediaArimetica(lista){

    let sumaLista = 0;

    for (let i = 0; i < lista.length; i++){
        sumaLista = sumaLista + lista[i];
    }
    const promedioLista1 = sumaLista/lista.length;

    return promedioLista1;

}
 */

//paso 3 Método Reduce.


function calcularMediaArimetica(lista){

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }

    );

    const promedioLista = sumaLista /lista.length;

    return promedioLista;

}

console.log(calcularMediaArimetica(lista));