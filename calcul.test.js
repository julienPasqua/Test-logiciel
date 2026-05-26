const division = require("./calcul");

test("division de 10 par 2", () => {
    expect(division(10, 2)).toBe(5);
});

test("division de 10 par 0", () => {
    expect(() => division(10, 0)).toThrow("Division par zéro");
});

test("division de 0 par 10", () => {
    expect(division(0, 10)).toBe(0);
});

test("division de -10 par 2", () => {
    expect(division(-10, 2)).toBe(-5);
});

test("division de 10 par -2", () => {
    expect(division(10, -2)).toBe(-5);
});

test("division de -10 par -2", () => {
    expect(division(-10, -2)).toBe(5);
});