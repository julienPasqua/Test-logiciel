const isEmailValid = require("./email");

test("email valide avec @, point et au moins 5 caractères", () => {
  expect(isEmailValid("a@b.c")).toBe(true);
});

test("email invalide sans @", () => {
  expect(isEmailValid("test.com")).toBe(false);
});

test("email invalide sans point", () => {
  expect(isEmailValid("test@mail")).toBe(false);
});

test("email invalide avec moins de 5 caractères", () => {
  expect(isEmailValid("a@.")).toBe(false);
});
