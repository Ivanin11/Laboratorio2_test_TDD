//Test de la división
const division = require("../src/division");

describe("test de la operación de la división", () => {
    test('el resultado de dividir  24 / 3 = 8', () => {
        const a = 24;
        const b = 3;
        const resultado_esperado = 8;
        const resultado_funcion = division(a, b);
        expect(resultado_funcion).toBe(resultado_esperado);
    })
});