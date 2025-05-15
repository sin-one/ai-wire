/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['next', 'next/core-web-vitals'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off'
  }
}
