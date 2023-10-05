const calculadora = require("../models/calculadora.js");

test("Somar 1 + 1 deve voltar 2", () => {
  const resultado = calculadora.somar(1, 1);
  expect(resultado).toBe(2);
});

test("Somar dois valores aleatórios.", () => {
  const num1 = Math.floor(Math.random() * (100 - 0 + 1) + 1);
  const num2 = Math.floor(Math.random() * (100 - 0 + 1) + 1);
  const expected = num1 + num2;

  const result = calculadora.somar(num1, num2);
  expect(result).toBe(expected);
});

test("Somar string e um numero.", () => {
  const result = calculadora.somar("banana", 2);
  expect(result).toBe("Erro");
});

test("Somar numero e um string.", () => {
  const result = calculadora.somar("banana", 2);
  expect(result).toBe("Erro");
});

test("Dividir dois numero aleatórios.", () => {
  const num1 = Math.floor(Math.random() * (100 - 1 + 1) + 1);
  const num2 = Math.floor(Math.random() * (100 - 1 + 1) + 1);
  const expected = num1 / num2;

  const result = calculadora.dividir(num1, num2);
  expect(result).toBe(expected);
});

test("Tentar dividir por zero.", () => {
  const result = calculadora.dividir(10, 0);
  expect(result).toBe("Erro");
});
