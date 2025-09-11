module.exports = {
    plugins: ['react', '@typescript-eslint', 'tailwindcss', 'unused-imports'],
    extends: ['next/core-web-vitals'],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        // Eslint
        'linebreak-style': ['error', 'unix'],
        // Typescript
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        // React
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/no-array-index-key': 'error',
        'react/no-unescaped-entities': 'off',
        // Unused import
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
            'warn',
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_',
            },
        ],
        // Tailwind
        'tailwindcss/no-custom-classname': 'off',
        // Next
        '@next/next/no-html-link-for-pages': 'off',
        // A11y
        'jsx-a11y/click-events-have-key-events': 'off',
    },
}
