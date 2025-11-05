function christmasGreeting() {
  return "Merry Christmas!";
}

// Test case should now be a success (added '!' at the end)
test("returns a cheerful greeting", () => {
  expect(christmasGreeting()).toBe("Merry Christmas!");
});
