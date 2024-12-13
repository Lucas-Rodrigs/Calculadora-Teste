const { somar, subtrair, multiplicar, dividir } = require('../Calculadora');

test('deve somar dois números', () => {
    expect(somar(4, 5)).toBe(9);  // Verifica se 4 + 5 é igual a 9
});

test('deve subtrair dois números', () => {
    expect(subtrair(4, 5)).toBe(-1);  // Verifica se 4 - 5 é igual a -1
});

test('deve multiplicar dois números', () => {
    expect(multiplicar(4, 5)).toBe(20);  // Verifica se 4 * 5 é igual a 20
});

test('deve dividir dois números', () => {
    expect(dividir(4, 5)).toBe(0.8);  // Verifica se 4 / 5 é igual a 0.8
    expect(dividir(4, 0)).toBe("Erro: divisão por zero");  // Verifica se divisão por zero retorna o erro correto
});