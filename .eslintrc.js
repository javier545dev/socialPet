module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'no-unused-vars': 'off',
    'no-useless-return': 'off',
    'react/jsx-uses-vars': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'quote-props': 'off',
    'multiline-ternary': ['error', 'never'],
    'prettier/prettier': ['off', {}, { usePrettierrc: true }]
  }
}
