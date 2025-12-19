const checkPWD = require("./passwordValidator");

test('le mot de passe doit contenir au moins 8 caractères', () => {
  expect(checkPWD('1234567')).toBe(false);
  expect(checkPWD('12345678')).toBe(true);
});