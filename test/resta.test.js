//Test de la operación resta
const resta = require("../src/resta");

describe("test de la operación de la resta", () => {
    test('el resultado de restar -3 - 2 = -5', () => {
        const a = -3;
        const b = 2;
        const resultado_esperado = -5;
        const resultado_funcion = resta(a, b);
        expect(resultado_funcion).toBe(resultado_esperado);
    })
});