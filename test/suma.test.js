//Test de la función suma
const suma = require("../src/suma");

describe("test de la operación suma", () => {
    test('el resultado de sumar -3 + 2 = -1', () => {
        const a = -3;
        const b = 2;
        const resultado_esperado = -1;
        const resultado_funcion = suma(a, b);
        expect(resultado_funcion).toBe(resultado_esperado);
    })
});