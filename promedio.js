// Paso 1. Crear código que nos calcule el promedio.
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
