const js = require("@eslint/js");

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        // Node globals
        require: true,
        module: true,

        // Browser globals
        window: true,
        document: true,
        Audio: true,

        // Jest testing globals
        test: true,
        expect: true,
      },
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "no-unused-vars": ["warn"],
    },
  },
];
