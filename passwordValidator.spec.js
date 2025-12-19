const checkPWD = require("./passwordValidator");

test("Le mot de passe doit contenir au moins 8 caractères", () => {
    expect(checkPWD("12345678")).toBe(false);
    expect(checkPWD("1234567")).toBe(false);
    expect(checkPWD("password1")).toBe(true);
})

test("Le mot de passe doit contenir au moins un chiffre", () => {
    expect(checkPWD("password")).toBe(false);
    expect(checkPWD("password1")).toBe(true);
})

test("Le mot de passe doit contenir au moins une lettre", () => {
    expect(checkPWD("12345678")).toBe(false);
    expect(checkPWD("1234a678")).toBe(true);
})