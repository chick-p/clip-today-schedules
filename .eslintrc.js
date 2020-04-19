module.exports = {
  "parser": "@typescript-eslint/parser",
  "plugins": ["prettier"],
  "plugins": ["@typescript-eslint", "prettier"],
  "extends": [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  "rules": {
    "@typescript-eslint/camelcase": 0,
    "prettier/prettier": [
      "error", {
        "semi": true,
        "arrowParens": "always"
    }],
  }
}
