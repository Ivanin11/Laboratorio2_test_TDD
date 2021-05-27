//Función que realiza la operación de la raíz cuadrada
const division = require("./division");
const resta = require("./resta");
const suma = require("./suma");

function raiz(n) {
    let x = n;
    let y = 1;
    let e = 0.0001;
    while (resta(x, y) > e) {
        s = suma(x, y);
        x = division(s, 2);
        y = division(n, x);
    }
    return x;
}

module.exports = raiz;