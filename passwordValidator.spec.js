const checkPWD = require("./passwordValidator");

test('le mot de passe doit contenir au moins 8 caractères', () => {
  expect(checkPWD('123456A', {minLen: 8, minLet: 1, minNum: 1})).toBe(false);
  expect(checkPWD('1234567A', {minLen: 8, minLet: 1, minNum: 1})).toBe(true);
});

test('le mot de passe contient au moins 1 chiffre', () => {
  expect(checkPWD('password', {minLen: 8, minLet: 1, minNum: 1})).toBe(false);
  expect(checkPWD('password1', {minLen: 8, minLet: 1, minNum: 1})).toBe(true);
});

test('le mot de passe contient au moins 1 lettre', () => {
  expect(checkPWD('12345678', {minLen: 8, minLet: 1, minNum: 1})).toBe(false);
  expect(checkPWD('1234567A', {minLen: 8, minLet: 1, minNum: 1})).toBe(true);
});

test('le mot de passe avec longueur paramétrable', () => {
    expect(checkPWD('1234567A', {minLen: 10, minLet: 1, minNum: 1})).toBe(false);
    expect(checkPWD('1234A', {minLen: 5, minLet: 1, minNum: 1})).toBe(true);
});

test('le mot de passe avec nombre minimal de chiffre paramétrable', () => {
  expect(checkPWD('1234567A', {minLen: 8, minLet: 2, minNum: 1})).toBe(false);
  expect(checkPWD('12345678', {minLen: 8, minLet: 0, minNum: 1})).toBe(true);
});

test('le mot de passe avec nombre minimal de lettre paramétrable', () => {
  expect(checkPWD('password1', {minLen: 8, minLet: 1, minNum: 2})).toBe(false);
  expect(checkPWD('password', {minLen: 8, minLet: 1, minNum: 0})).toBe(true);
});