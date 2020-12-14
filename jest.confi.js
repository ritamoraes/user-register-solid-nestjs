module.exports = {
    moduleFileExtensions: ['js', 'json', 'ts'],
    roots: ['src', 'test'],
    testRegex: '\\.spec\\.ts$',
    transform: {
        '^.+\\.(t|j)s$': 'ts-jest'
    },
    coverageDirectory: './coverage/',
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.ts',
        '!src/app.module.ts',
        '!src/app.ts',
        '!src/main.ts',
        '!src/main-aws.ts'
    ],
    testResultsProcessor: 'jest-sonar-reporter',
    testEnvironment: 'node'
};
