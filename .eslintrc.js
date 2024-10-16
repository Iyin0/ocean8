module.exports = {
  extends: ['next', 'next/core-web-vitals'],
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-unused-vars': 'error',
    'indent': ['error', 2],
  },
};