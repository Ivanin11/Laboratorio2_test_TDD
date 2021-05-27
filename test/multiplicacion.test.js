//Test de la multiplicación
const multiplicacion = require("../src/multiplicacion");

describe("test de la operación de la multiplicación", () => {
    test('el resultado de multiplicar -2 * 5 = -10', () => {
        const a = -2;
        const b = 5;
        const resultado_esperado = -10;
        const resultado_funcion = multiplicacion(a, b);
        expect(resultado_funcion).toBe(resultado_esperado);
    })
});