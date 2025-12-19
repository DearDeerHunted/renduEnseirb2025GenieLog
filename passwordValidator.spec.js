const checkPWD = require("./passwordValidator");

test('le mot de passe doit contenir au moins 8 caractères', () => {
  expect(checkPWD('1234567')).toBe(false);
  expect(checkPWD('12345678')).toBe(true);
});

test('le mot de passe contient au moins 1 chiffre', () => {
  expect(checkPWD('password')).toBe(false);
  expect(checkPWD('password1')).toBe(true);
});