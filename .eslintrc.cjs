module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'eslint-config-prettier',
		'plugin:tailwindcss/recommended',
		'next',
	],
	plugins: ['react', 'prettier', '@typescript-eslint'],
	parser: '@typescript-eslint/parser',
	ignorePatterns: ['.eslintrc.cjs'],
	rules: { '@typescript-eslint/no-explicit-any': ['off'] },
}
