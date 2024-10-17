module.exports = {
  root: true,
  extends: [
    'next',
    'next/core-web-vitals',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  plugins: ['import', 'prettier'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
  },
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-unused-vars': 'error',
    'import/no-unresolved': ['error', { ignore: ['^@'] }],
    'import/prefer-default-export': 'off',
  },
  overrides: [
    {
      files: ['components/ui/**/*.tsx'],
      rules: {
        'react/jsx-props-no-spreading': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        '@next/next/no-html-link-for-pages': 'off',
        'react/react-in-jsx-scope': 'off',
        '@nx/enforce-module-boundaries': 'off',
        'import/prefer-default-export': 'off',
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/prop-types': 'off',
        'react/no-unescaped-entities': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {},
    },
    {
      files: ['*.js', '*.jsx'],
      rules: {},
    },
  ],
};
