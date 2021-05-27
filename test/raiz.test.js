//Test de la raíz cuadrada
const raiz = require ('../src/raiz');

describe("test de la operación de la raíz cuadrada", () => {
    test('el resultado de la raíz de 23 tiene que ser < 0,0001', () => {
        const a = 23;
        const resultado_esperado = 4.79583152331;
        const resultado_funcion = raiz(a);
        //assert
        expect(Math.abs(resultado_esperado - resultado_funcion)).toBeLessThan(0.0001);
        
    })
});