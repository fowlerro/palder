module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: [
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"airbnb",
		"airbnb/hooks",
		"plugin:jsx-a11y/recommended",
		"prettier",
	],
	plugins: ["jsx-a11y", "prettier", "@typescript-eslint", "react-refresh"],
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		"import/resolver": {
			typescript: {
				project: ["./tsconfig.json"],
			},
		},
	},
	rules: {
		"react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
		"no-unused-vars": "warn",
		"react/react-in-jsx-scope": "off",
		"react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
		"react/require-default-props": ["off"],
		"react/jsx-key": "error",
		"react/jsx-props-no-spreading": "off",
		"import/extensions": [
			"error",
			"ignorePackages",
			{
				js: "never",
				jsx: "never",
				ts: "never",
				tsx: "never",
			},
		],
		"import/no-extraneous-dependencies": ["error", { devDependencies: true }],
	},
}
