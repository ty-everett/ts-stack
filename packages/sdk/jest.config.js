/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  testEnvironment: 'node',
  testPathIgnorePatterns: ['dist/'],
  modulePathIgnorePatterns: ['<rootDir>/dist'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  workerIdleMemoryLimit: '1536MB',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      useESM: true,
      diagnostics: false,
      tsconfig: {
        target: 'ES2020',
        module: 'ESNext',
        moduleResolution: 'bundler',
        strict: false,
        strictNullChecks: false,
        noImplicitAny: false,
        strictPropertyInitialization: false,
        skipLibCheck: true,
        types: ['node', 'jest']
      }
    }]
  },
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  }
}
