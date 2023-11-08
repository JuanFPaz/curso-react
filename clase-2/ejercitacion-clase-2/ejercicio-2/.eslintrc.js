module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: 'standard',
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    "no-void": "off",
    "eol-last": "off",
    "quote-props": "off",
    "semi-spacing": "off",
    "no-proto": "off",
    "no-unused-expressions": "off",
    "new-cap": "off",
    "space-in-parens": "off",
    "curly": "off",
    "no-mixed-operators": "off",
    "dot-notation": "off",
    "no-sequences": "off",
    "eqeqeq": "off",
    "yoda": "off",
    "no-return-assign": "off",
    "no-func-assign": "off",
    "one-var": "off",
    "space-before-function-paren": "off",
    "no-var": "off",
    "quotes": "off",
    "semi": "off",
    'promise/param-names': 'off',
    'no-unused-vars': 'off'
  }
}
