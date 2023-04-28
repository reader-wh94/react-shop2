module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    "indent": [
      "error",
      2
    ],
    "semi": [
      "error",
      "always"
    ],
    "no-trailing-spaces": 0,
    "keyword-spacing": 0,
    "no-unused-vars": 0,
    "no-multiple-empty-lines": 0,
    "space-before-function-paren": 0,
    "eol-last": 0
  },
}
