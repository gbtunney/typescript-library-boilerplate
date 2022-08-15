// @ts-check
/* eslint-env node */

'use strict'

/**
 * An object with ESLint options.
 *
 * @type {import('eslint').Linter.Config}
 */
const options = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2021,
    },
    plugins: ['@typescript-eslint', 'import', 'jsdoc'],
    extends: [
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        /** Report imported names marked with @deprecated documentation tag */
        'import/no-deprecated': 'error',
        /** Forbid the use of extraneous packages */
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: [
                    '**/__tests__/**/*',
                    '**/__story__/**/*',
                    '**/fixtures/**/*',
                ],
                optionalDependencies: false,
            },
        ],
        /** Reports invalid alignment of JSDoc block asterisks. */
        'jsdoc/check-alignment': 'error',
        /** Reports invalid padding inside JSDoc blocks. */
        'jsdoc/check-indentation': 'error',
        /** Enforces a consistent padding of the block description. */
        'jsdoc/newline-after-description': 'error',
        /** This rule reports types being used on @param or @returns. */
        'jsdoc/no-types': 'error',
    },
}

module.exports = options
