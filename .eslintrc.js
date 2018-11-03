module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "no-param-reassign": ["error", { "props": false }],
    "react/forbid-prop-types": 0,
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
