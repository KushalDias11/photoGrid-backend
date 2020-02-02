module.exports = {
	extends: ['eslint:recommended', 'prettier'],
	env: {
		node: true,
		jasmine: true,
		jest: true,
		es6: true
	},
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	rules: {
		// enable additional rules
		semi: [2, 'always'],

		// override default options for rules from base configurations
		'no-cond-assign': [2, 'always'],

		// disable rules from base configurations
		'no-console': 0,
		// "no-mixed-spaces-and-tabs": [2, "always"],
		eqeqeq: [2, 'smart'],
		camelcase: [2, { properties: 'never' }],
		'no-unused-expressions': [2, { allowShortCircuit: false, allowTernary: false }],
		'no-use-before-define': [2, { functions: false, classes: true }]
	},
	overrides: [
		{
			files: ['*.js', '*.json', '*.jsx'],
			excludedFiles: ['package.json', './.githooks/**/*']
		}
	]
};
