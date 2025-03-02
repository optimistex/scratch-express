// @ts-check
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const stylistic = require('@stylistic/eslint-plugin');
const eslintPluginImport = require('eslint-plugin-import');

const ignores = ['node_modules/*', 'dist/*', 'coverage/*', 'jest.config.ts'];
module.exports = tseslint.config(
    {
        // Extended setup from Angular for *.ts files
        files: ['**/*.ts'],
        ignores,
        extends: [
            eslint.configs.recommended,
            ...tseslint.configs.recommendedTypeChecked, // Linting with Type Information: https://typescript-eslint.io/getting-started/typed-linting/
            ...tseslint.configs.stylistic,
        ],
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: __dirname,
            },
        },
        rules: {
            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/no-unsafe-member-access': 'error',
            '@typescript-eslint/no-unsafe-return': 'error',
            '@typescript-eslint/no-unsafe-assignment': 'error',
            '@typescript-eslint/no-unsafe-enum-comparison': 'error',
            '@typescript-eslint/no-unsafe-call': 'error',
            'no-prototype-builtins': 'error',
            '@typescript-eslint/no-misused-promises': 'error',
            'no-useless-escape': 'error',
            '@typescript-eslint/no-redundant-type-constituents': 'error',
            '@typescript-eslint/no-deprecated': 'error',
            '@typescript-eslint/no-base-to-string': 'error',
            '@typescript-eslint/prefer-promise-reject-errors': 'error',
            '@typescript-eslint/restrict-plus-operands': 'error',
            '@typescript-eslint/restrict-template-expressions': 'error',
            '@typescript-eslint/consistent-type-definitions': 'error',
            '@typescript-eslint/array-type': 'error',
            '@typescript-eslint/await-thenable': 'error',
            '@typescript-eslint/ban-tslint-comment': 'error',
            '@typescript-eslint/consistent-indexed-object-style': 'off',
            '@typescript-eslint/consistent-type-assertions': 'error',
            '@typescript-eslint/explicit-function-return-type': [
                'error',
                {
                    allowExpressions: true,
                    allowTypedFunctionExpressions: true,
                    allowHigherOrderFunctions: true,
                    allowDirectConstAssertionInArrowFunctions: true,
                    allowConciseArrowFunctionExpressionsStartingWithVoid: false
                }
            ],
            '@typescript-eslint/explicit-member-accessibility': [
                'error',
                {
                    accessibility: 'explicit',
                    overrides: {
                        constructors: 'no-public',
                        accessors: 'off'
                    }
                }
            ],
            '@typescript-eslint/explicit-module-boundary-types': [
                'error',
                {
                    allowArgumentsExplicitlyTypedAsAny: true,
                    allowDirectConstAssertionInArrowFunctions: true,
                    allowedNames: [],
                    allowHigherOrderFunctions: true,
                    allowTypedFunctionExpressions: true
                }
            ],
            '@typescript-eslint/member-ordering': 'off',
            '@typescript-eslint/naming-convention': 'error',
            '@typescript-eslint/no-empty-function': 'warn',
            '@typescript-eslint/no-empty-interface': 'error',
            '@typescript-eslint/no-empty-object-type': 'error',
            '@typescript-eslint/no-floating-promises': [
                'error',
                {
                    allowForKnownSafeCalls: [
                        {from: 'package', name: ['navigate'], package: '@angular/router'},
                        {
                            from: 'package', package: 'jasmine',
                            name: [
                                'toBe', 'toBeNull', 'toContain', 'toBeCloseTo', 'toBeUndefined', 'toBeDefined', 'toEqual', 'toBeFalsy', 'toBeTruthy',
                                'toHaveBeenCalled', 'toHaveBeenCalledTimes', 'toThrowError', 'toBeGreaterThan'
                            ],
                        }
                    ]
                }
            ],
            '@typescript-eslint/no-for-in-array': 'error',
            '@typescript-eslint/no-inferrable-types': [
                'error',
                {
                    ignoreParameters: true
                }
            ],
            '@typescript-eslint/no-namespace': 'error',
            '@typescript-eslint/no-shadow': 'error',
            '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
            '@typescript-eslint/no-unnecessary-type-assertion': 'error',
            '@typescript-eslint/no-unsafe-argument': 'warn',
            '@typescript-eslint/no-unsafe-function-type': 'error',
            '@typescript-eslint/no-unused-expressions': [
                'error',
                {
                    allowTernary: true
                }
            ],
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_.*$|next$'
                }
            ],
            '@typescript-eslint/no-var-requires': 'error',
            '@typescript-eslint/no-wrapper-object-types': 'error',
            '@typescript-eslint/prefer-as-const': 'error',
            '@typescript-eslint/prefer-function-type': 'error',
            '@typescript-eslint/require-await': 'error',
            '@typescript-eslint/unbound-method': 'off',
            'arrow-body-style': 'error',
            eqeqeq: 'error',
            'id-blacklist': 'error',
            'no-bitwise': 'off',
            'no-case-declarations': 'error',
            // 'no-console': 'warn',
            'no-shadow': 'off',
            'no-template-curly-in-string': 'error',
            'no-underscore-dangle': [
                'error',
                {
                    allow: [
                        '__simulateChange',
                        '__simulateTouch'
                    ]
                }
            ],
            'prefer-arrow/prefer-arrow-functions': 'off',
            'prefer-const': [
                'error',
                {
                    destructuring: 'all'
                }
            ],
        },
    },
    {
        // ESLint Stylistic: https://eslint.style/
        files: ['**/*.ts'],
        ignores,
        extends: [
            stylistic.configs.customize({semi: true}),
        ],
        rules: {
            '@stylistic/array-bracket-spacing': 'error',
            '@stylistic/arrow-parens': ['error', 'as-needed'],
            '@stylistic/arrow-spacing': 'error',
            '@stylistic/brace-style': ['error', '1tbs'],
            '@stylistic/comma-dangle': [
                'error',
                {
                    arrays: 'always-multiline',
                    objects: 'always-multiline',
                    imports: 'always-multiline',
                    exports: 'always-multiline',
                    functions: 'never',
                    importAttributes: 'always-multiline',
                    dynamicImports: 'always-multiline',
                    enums: 'always-multiline',
                }
            ],
            '@stylistic/comma-spacing': 'error',
            '@stylistic/eol-last': [
                'error',
                'always'
            ],
            '@stylistic/indent': [
                'error', 2,
                {
                    SwitchCase: 1,
                    ignoredNodes: [
                        'TSTypeParameterInstantiation',
                        'TSUnionType',
                        'MethodDefinition > FunctionExpression Decorator',
                    ],
                    FunctionDeclaration: {
                        parameters: 'first',
                    },
                    FunctionExpression: {
                        parameters: 'first',
                    },
                }
            ],
            '@stylistic/indent-binary-ops': 'off',
            '@stylistic/key-spacing': 'error',
            '@stylistic/keyword-spacing': 'error',
            '@stylistic/lines-between-class-members': 'error',
            '@stylistic/max-len': [
                'error',
                {
                    code: 160
                }
            ],
            '@stylistic/member-delimiter-style': 'error',
            '@stylistic/multiline-ternary': 'off',
            '@stylistic/no-confusing-arrow': 'error',
            '@stylistic/no-floating-decimal': 'error',
            '@stylistic/no-mixed-operators': 'off',
            '@stylistic/no-multi-spaces': ['error', {ignoreEOLComments: true}],
            '@stylistic/no-multiple-empty-lines': ['error', {max: 1}],
            '@stylistic/no-tabs': 'error',
            '@stylistic/no-trailing-spaces': 'error',
            '@stylistic/object-curly-spacing': [
                'error',
                'always'
            ],
            '@stylistic/operator-linebreak': 'error',
            '@stylistic/padded-blocks': ['error', 'never'],
            '@stylistic/quote-props': [
                'error',
                'as-needed'
            ],
            '@stylistic/quotes': [
                'error',
                'single',
                {
                    avoidEscape: true,
                    allowTemplateLiterals: true
                }
            ],
            '@stylistic/semi': ['error', 'always'],
            '@stylistic/space-before-blocks': 'error',
            '@stylistic/space-in-parens': 'error',
            '@stylistic/space-infix-ops': 'error',
            '@stylistic/spaced-comment': 'off',
            '@stylistic/type-annotation-spacing': 'error',
        }
    },
    {
        // Import order
        files: ['**/*.ts'],
        ignores,
        extends: [
            eslintPluginImport.flatConfigs.recommended
        ],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        rules: {
            'import/named': 'off',
            'import/no-unresolved': 'off',
            'import/namespace': 'off',
            'import/order': [
                'error',
                {
                    'newlines-between': 'always',
                    groups: [['builtin', 'external'], 'internal', 'parent', ['sibling', 'index'], 'unknown'],
                    pathGroups: [
                        {
                            pattern: '@nestjs/**',
                            group: 'external',
                            position: 'after',
                        },
                    ],
                    pathGroupsExcludedImportTypes: ['internal'],
                },
            ]
        },
        settings: {
            'import/parsers': {
                '@typescript-eslint/parser': ['.ts'],
            },
            'import/resolver': {
                typescript: {
                    alwaysTryTypes: true,
                },
            },
        }
    },
);
