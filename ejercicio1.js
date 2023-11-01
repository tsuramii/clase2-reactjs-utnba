// Ejercicio 1 - Clase 2 UTN BA
// Tengo desarrollada la siguiente función en javascript
function suma(a, b, callback) {
    let c = a + b;
    callback(c);
}

// ¿Que es el tercer parámetro recibido?
// R: El tercer parámetro recibido es una función de callback, una funcion que se pasa como argumento 
// a otra función y se ejecuta después que la funcion principal haya completado su tarea.

// ¿En que casos es obligatorio desarrollar este tipo de funciones?
// R: Las funciones de callback son obligatorias en casos de operaciones asincrónicas y eventos.

// Realizar un llamado a la función de ejemplo.
suma(2, 3, (resultado) => {
    console.log('El resultado de la suma es: ' + resultado);
});