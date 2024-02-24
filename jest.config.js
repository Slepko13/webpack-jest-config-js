module.exports = {
    roots: ['<rootDir>/src'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
    transform: {
        '^.+\\.[t|j]sx?$': 'babel-jest',
    },
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    coverageReporters: [
        'json',
        [
            'lcov',
            {
                projectRoot: '../../../../../',
            },
        ],
        'text',
        'clover',
        'json-summary',
    ],
};
