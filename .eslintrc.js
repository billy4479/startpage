module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "no-plusplus": 0,
    "no-shadow": "off",
  },
  ignorePatterns: ["build/*", "node_modules/*"],
};
