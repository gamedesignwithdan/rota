module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'prettier'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
	],
	rules: {
		'prettier/prettier': 'error',
		'no-mixed-spaces-and-tabs': ['warn', 'smart-tabs'],
	},
	ignorePatterns: ['*.test.ts'],
};
