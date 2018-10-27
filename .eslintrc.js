module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "no-param-reassign": ["error", { "props": false }],
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
