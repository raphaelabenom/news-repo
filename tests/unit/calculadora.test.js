const calculadora = require("../../models/calculadora.js");

test("Somar 2 + 2 deve retorna 4", () => {
  const resultado = calculadora.somar(3, 1);
  expect(resultado).toBe(4);
});

test("Somar 100 + 10 deve retorna 4", () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105);
});

test("Somar 200 + 300 deve retorna 4", () => {
  const resultado = calculadora.somar(200, 300);
  expect(resultado).toBe(500);
});
