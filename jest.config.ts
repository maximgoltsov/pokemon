const path = require('path');

module.exports = {
  roots: [path.resolve(__dirname, './src')],
  transform: {
    '^.+\\.[t|j]s(x)?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@core(.*)$': '<rootDir>/src/core$1',
    '^@features(.*)$': '<rootDir>/src/features$1',
    '^@pages(.*)$': '<rootDir>/src/pages$1',
    '^@widgets(.*)$': '<rootDir>/src/widgets$1',
  },
  reporters: ['default'],
  globals: {
    'ts-jest': {
      tsconfig: {
        allowJs: true,
      },
      diagnostics: {
        warnOnly: true,
      },
    },
  },
  setupFilesAfterEnv: [path.resolve(__dirname, './jest.setup.ts')],
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['src/**/*.(ts|tsx)', '!**/node_modules/**'],
  coverageReporters: ['html', 'text', 'text-summary', 'cobertura'],
  testMatch: ['**/*.spec.(ts|tsx)'],
};
