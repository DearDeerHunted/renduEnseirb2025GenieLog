const checkPWD = require("./passwordValidator");

test('le mot de passe doit contenir au moins 8 caractères', () => {
  expect(checkPWD('123456A')).toBe(false);
  expect(checkPWD('1234567A')).toBe(true);
});

test('le mot de passe contient au moins 1 chiffre', () => {
  expect(checkPWD('password')).toBe(false);
  expect(checkPWD('password1')).toBe(true);
});

test('le mot de passe contient au moins 1 lettre', () => {
  expect(checkPWD('12345678')).toBe(false);
  expect(checkPWD('1234567A')).toBe(true);
});