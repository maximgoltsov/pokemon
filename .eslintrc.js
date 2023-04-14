const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  root: true,

  env: {
    es6: true,
    node: true,
    browser: true,
  },

  ignorePatterns: ['**/*.js'],

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module',
    jsx: true,
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },

  settings: {
    react: {
      version: 'detect',
    }
  },

  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:jest-dom/recommended',
  ],

  plugins: [
    'import',
    'jsx-a11y',
    'react',
    'react-hooks',
    'compat',
    'sonarjs',
    'optimize-regex',
  ],

  rules: {
    'react/jsx-uses-react': OFF,
    'react/react-in-jsx-scope': OFF,
    '@typescript-eslint/camelcase': OFF,
    'react/prop-types': OFF,
    'react/jsx-sort-default-props': OFF,
    'no-underscore-dangle': [ERROR, { allowAfterThis: true }],
    'func-names': [ERROR, 'as-needed', { generators: 'never' }],

    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z][A-Za-z0-9]+$',
          match: true,
        },
      },
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
        custom: {
          regex: '^T[A-Z][A-Za-z0-9]+$',
          match: true,
        },
      },
      {
        selector: 'enum',
        format: ['PascalCase'],
        custom: {
          regex: '^E[A-Z][A-Za-z0-9]+$',
          match: true,
        },
      }
    ],
    'newline-before-return': ERROR,
    'import/prefer-default-export': OFF,
    'operator-linebreak': [ERROR, 'before'],
    'jsx-a11y/label-has-associated-control': OFF,
    'linebreak-style': OFF,
    'consistent-return': OFF,
    'react/state-in-constructor': OFF,
    'jsx-a11y/anchor-is-valid': OFF,
    'jsx-a11y/click-events-have-key-events': OFF,
    'jsx-a11y/no-static-element-interactions': OFF,
    'jsx-a11y/no-noninteractive-element-interactions': OFF,
    'class-methods-use-this': OFF,
    'react/jsx-props-no-spreading': OFF,
    'react/require-default-props': OFF,
    'react/jsx-sort-default-props': [ ERROR, { ignoreCase: false } ],
    'no-param-reassign': [ERROR, { props: false }],
    'id-length': [ERROR, { exceptions: ['_', 'i', 'j', 'x', 'y', 'z', 'a', 'b', 'e', 'k', 'v'] }],
    'indent': [
      ERROR,
      2,
      {
        SwitchCase: 1,
        MemberExpression: 1,
        ignoredNodes: ['JSXElement'],
      },
    ],
    'react/jsx-indent': [ERROR, 2, { checkAttributes: true, indentLogicalExpressions: true }],
    'react/jsx-indent-props': [ERROR, 2],
    'react/jsx-one-expression-per-line': [ERROR, { allow: 'single-child' }],
    'max-len': [WARN, { code: 150, ignoreStrings: true }],
    'import/no-extraneous-dependencies': [WARN, { devDependencies: true }],
    'react/jsx-filename-extension': [ERROR, { extensions: ['.ts', '.tsx'] }],
    'quote-props': [ERROR, 'consistent'],
    'no-alert': ERROR,
    'import/extensions': [
      ERROR,
      {
        ts: 'never',
        tsx: 'never',
        svg: 'always',
        png: 'always',
        json: 'always',
        css: 'always',
      },
    ],
    'no-plusplus': [ERROR, { allowForLoopAfterthoughts: true }],
    'camelcase': [
      ERROR,
      {
        allow: ['UNSAFE_componentDidMount', 'UNSAFE_componentWillReceiveProps', 'UNSAFE_componentWillUpdate'],
      },
    ],
    'new-cap': [
      ERROR,
      {
        capIsNewExceptions: ['SortableContainer', 'SortableElement', 'List', 'Map', 'Set'],
      },
    ],
    'react/jsx-sort-props': [
      ERROR,
      {
        callbacksLast: true,
        shorthandFirst: true,
        shorthandLast: false,
        ignoreCase: false,
        noSortAlphabetically: false,
        reservedFirst: false,
      },
    ],
    'react/sort-comp': [
      ERROR,
      {
        order: ['static-methods', 'lifecycle', 'everything-else', '/^(get|set).+$/', '/^handle.+$/', 'rendering'],
        groups: {
          lifecycle: [
            'constructor',
            'statics',
            'contextTypes',
            'childContextTypes',
            'state',
            'getDefaultProps',
            'getInitialState',
            'getChildContext',
            'getDerivedStateFromProps',
            'componentDidMount',
            'shouldComponentUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount',
          ],
          rendering: ['/^render.+$/', 'render'],
        },
      },
    ],
    'react/sort-prop-types': [
      ERROR,
      {
        callbacksLast: true,
        ignoreCase: false,
        requiredFirst: true,
        sortShapeProp: true,
        noSortAlphabetically: false,
      },
    ],
    'object-curly-newline': [
      ERROR,
      {
        ObjectPattern: { consistent: true },
        ObjectExpression: { consistent: true },
      },
    ],
    'import/order': [
      ERROR,
      {
        alphabetize: { order: 'asc', caseInsensitive: false },
      },
    ],
  },

  overrides: [
    {
			files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
			extends: ['plugin:testing-library/react'],
		},
  ],
};
