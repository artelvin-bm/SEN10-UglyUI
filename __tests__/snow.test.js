function christmasGreeting() {
  return "Merry Christmas!";
}

// Test case [missing '!' at the end of the greeting string]
test("returns a cheerful greeting", () => {
  expect(christmasGreeting()).toBe("Merry Christmas");
});
