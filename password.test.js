const isPasswordValid = require("./password");

test("mot de passe valide avec au moins 8 caractères, une majuscule, une minuscule et un chiffre", () => {
  expect(isPasswordValid("Motde1hqs")).toBe(true);
});

test("mot de passe invalide sans majuscule", () => {
  expect(isPasswordValid("motdepasse1")).toBe(false);
});

test("mot de passe invalide sans minuscule", () => {
  expect(isPasswordValid("MOTDEPASSE1")).toBe(false);
});

test("mot de passe invalide sans chiffre", () => {
  expect(isPasswordValid("Motdepasse")).toBe(false);
});

test("mot de passe invalide avec moins de 8 caractères", () => {
  expect(isPasswordValid("Mdp1")).toBe(false);
});

test("mot de passe invalide avec 'ruliane007'", () => {
  expect(isPasswordValid("Motruliane007")).toBe(false);
});
