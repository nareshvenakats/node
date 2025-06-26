const greet = require('../app');  // Import the greet function

describe('greet', () => {
  it('should return "Hello, World!"', () => {
    expect(greet()).toBe("Hello, World!");
  });
});
