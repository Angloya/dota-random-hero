module.exports = {
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'next/core-web-vitals',
        'plugin:react/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': 'warn',
        'semi': [2, 'always'],
        'react/jsx-first-prop-new-line': [2, 'multiline'],
        'react/jsx-max-props-per-line': [
            2,
            { maximum: 1, when: 'multiline' },
        ],
        'react/jsx-filename-extension': 'off',
        'indent': ['error', 4],
        'react/react-in-jsx-scope': 'off',
        quotes: ['error', 'single'],
    },
};
