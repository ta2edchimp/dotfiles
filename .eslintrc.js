/* eslint-env node */
/* eslint quote-props: [2, "always"] */
module.exports = {
  'rules': {
    'no-console': 1,
    'no-extra-parens': [2, 'all'],
    'no-unexpected-multiline': 2,
    'block-scoped-var': 2,
    'consistent-return': 2,
    'curly': [2, 'all'],
    'default-case': 2,
    'dot-notation': [1, { 'allowKeywords': true }],
    'dot-location': [2, 'property'],
    'eqeqeq': [2, 'smart'],
    'guard-for-in': 2,
    'no-alert': 2,
    'no-caller': 2,
    'no-div-regex': 2,
    'no-else-return': 2,
    'no-empty-label': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-extra-bind': 2,
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-implied-eval': 2,
    'no-invalid-this': 2,
    'no-iterator': 2,
    'no-labels': 2,
    'no-lone-blocks': 1,
    'no-loop-func': 1,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-native-reassign': 2,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-new': 2,
    'no-octal-escape': 2,
    'no-octal': 2,
    'no-param-reassign': [2, { 'props': false }],
    'no-proto': 2,
    'no-redeclare': [2, { 'builtinGlobals': true }],
    'no-return-assign': [2, 'always'],
    'no-script-url': 2,
    'no-unused-expressions': 2,
    'no-useless-call': 2,
    'no-void': 2,
    'no-warning-comments': [1, { 'terms': ['todo', ' fixme', ' debug'], 'location': 'anywhere' }],
    'no-with': 2,
    'radix': 2,
    'vars-on-top': 2,
    'wrap-iife': [2, 'inside'],
    'no-catch-shadow': 2,
    'no-delete-var': 2,
    'no-label-var': 2,
    'no-shadow-restricted-names': 2,
    'no-undef-init': 2,
    'no-undef': 2,
    'no-undefined': 2,
    'no-unused-vars': 2,
    'no-use-before-define': 2,
    'array-bracket-spacing': [2, 'never', { 'singleValue': false, 'objectsInArrays': false }],
    'brace-style': [2, '1tbs', {}],
    'camelcase': [2, { 'properties': 'always' }],
    'comma-spacing': [2, { 'after': true }],
    'comma-style': 2,
    'computed-property-spacing': [2, 'never'],
    'consistent-this': [2, 'self'],
    'eol-last': [2, 'unix'],
    'func-names': 1,
    'indent': [2, 2],
    'key-spacing': [2, { 'afterColon': true }],
    'lines-around-comment': [2, { 'beforeBlockComment': true, 'beforeLineComment': true, 'allowBlockStart': true }],
    'linebreak-style': [2, 'unix'],
    'new-cap': 2,
    'new-parens': 2,
    'newline-after-var': [2, 'always'],
    'no-array-constructor': 2,
    'no-inline-comments': 1,
    'no-lonely-if': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multiple-empty-lines': [2, { 'max': 1 }],
    'no-nested-ternary': 2,
    'no-new-object': 2,
    'no-spaced-func': 2,
    'no-trailing-spaces': 2,
    'no-unneeded-ternary': 2,
    'object-curly-spacing': [2, 'always', {}],
    'operator-linebreak': [2, 'after'],
    'padded-blocks': [2, 'never'],
    'quote-props': [2, 'as-needed'],
    'quotes': [2, 'single'],
    'semi-spacing': [2, { 'after': true }],
    'semi': [2, 'always'],
    'space-after-keywords': [2, 'always'],
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, 'always'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': [2, { 'int32Hint': true }],
    'space-return-throw-case': 2,
    'space-unary-ops': [2, { 'words': true }],
    'spaced-comment': [2, 'always', {}],
    'arrow-parens': [2, 'always'],
    'arrow-spacing': [2, { 'before': true, 'after': true }],
    'constructor-super': 2,
    'generator-star-spacing': [2, 'before'],
    'no-class-assign': 2,
    'no-const-assign': 2,
    'no-this-before-super': 2,
    'no-var': 1,
    'object-shorthand': [1, 'always'],
    'prefer-const': 1,
    'prefer-spread': 1,
    'require-yield': 2
  },
  'env': {
    'es6': true,
    'browser': true
  },
  'extends': 'eslint:recommended',
  'ecmaFeatures': {
    'blockBindings': true,
    'experimentalObjectRestSpread': true,
    'jsx': true,
    'modules': true,
    'spread': true
  }
};
