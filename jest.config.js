// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
module.exports = {
  snapshotSerializers: [
    "enzyme-to-json/serializer"
  ],
  setupFiles: [
    '<rootDir>/test/enzyme.config.js',
    'jest-plugin-context/setup'
  ],
  moduleFileExtensions: ['js', 'jsx', 'json'],
  moduleNameMapper: {
    '^.+\\.(css|scss|png|jpg|jpeg|gif|svg|pdf)$': 'babel-jest',
  },
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  testEnvironment: 'node',
  testMatch: [
    '**/?(*.)+(spec|test).js?(x)'
  ],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/'
  ],
  globals: {
   'NODE_ENV': 'dev'
  },
  verbose: false,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coverageDirectory: '<rootDir>/test/__coverage__',
  coverageReporters: ["json", "lcov", "text"]
}
