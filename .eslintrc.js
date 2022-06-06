module.exports = {
	env: {
		// allows use of 'module'
		node: true,
		// allows use of 'fetch' if true
		browser: false,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		ecmaFeatures: {
			jsx: true,
		},
		sourceType: 'module',
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	plugins: ['@typescript-eslint/eslint-plugin'],
	rules: {
		'linebreak-style': ['error', 'unix'],
	},
};
