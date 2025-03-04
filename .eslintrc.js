module.exports = {
  extends: ['react-app'],
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    'jsx-quotes': ['error', 'prefer-double'],
    'indent': ['error', 2],
    'semi': ['error', 'always']
  }
}
