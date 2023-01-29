module.exports = {
  roots: [
    '<rootDir>/__tests__'
  ],
  modulePathIgnorePatterns: ['<rootDir>/__tests__/__mocks__'],
  testMatch: [
    '/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)'
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  moduleDirectories: ['node_modules', 'src']
}
