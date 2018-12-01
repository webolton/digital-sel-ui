module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    "no-param-reassign": ["error", { "props": false }],
    "react/forbid-prop-types": 0,
    "react/destructuring-assignment": 0,
    "camelcase": 0,
  },
  "settings": {
    "import/resolver": {
      "node": {
        "moduleDirectory": [
          "node_modules",
          "src"
        ]
      }
    }
  }
};
