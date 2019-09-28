module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "jest": true,
    "jquery": true,
    "node": true
  },
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "sourceType": "module",
    "ecmaVersion": 2018
  },
  "plugins": [
    "babel",
    "react"
  ],
  "rules": {
    "eqeqeq": "error",
    "no-unused-vars": "warn",
    "no-console": "warn",
    "no-debugger": "warn",
    "semi": ["error", "always"],
    "indent": ["error", 2],
    "no-multiple-empty-lines": ["error", { "max": 2, "maxBOF": 1 }]
  }
};