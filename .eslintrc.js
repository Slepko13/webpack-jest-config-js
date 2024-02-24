module.exports = {
    env: {
        browser: true,
        es2021: true,
        es6: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'standard',
        'prettier',
        'plugin:jest/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: [
        'react',
        'unused-imports',
        'import',
        'prettier',
        'jest',
        '@typescript-eslint',
    ],
    rules: {
        'no-console': 'warn',
        'no-unused-vars': 'warn',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-var-requires': 'off',
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react/prop-types': 'warn',
        'import/order': [
            'error',
            {
                groups: [
                    'builtin',
                    'external',
                    'internal',
                    'parent',
                    'sibling',
                    'index',
                    'object',
                    'type',
                ],
                'newlines-between': 'always-and-inside-groups',
            },
        ],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
