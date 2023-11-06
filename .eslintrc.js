module.exports = {
    env: {
        node: true,
        commonjs: true,
        es2021: true,
    },
    extends: 'eslint:recommended',
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
        {
            env: {
                jest: true,
            },
            files: ['**/*.spec.js'],
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        semi: ['error', 'always'],
        'no-console': ['warn', { allow: ['error'] }],
    },
    ignorePatterns: ['dist/'],
};
