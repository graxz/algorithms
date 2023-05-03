module.exports = {
    testEnvironment: 'node',
    testMatch: [
        "**/__tests__/**/*.test.js?(x)",
        "**/?(*.)+(spec|test).js?(x)"
    ],
    testPathIgnorePatterns: [
        "/node_modules/"
    ],
    collectCoverage: true,
    collectCoverageFrom: [
        "circular-linked-list/*.js",
        "doubly-linked-list/*.js",
        "queue/*.js",
        "stacks/*.js",
        "hash-table/*.js",
        "queue-priority/*.js",
        "set/*.js",
        "linear-search/*.js",
        "binary-search/*.js",
    ],
    coverageDirectory: "__tests__/coverage",
    coverageReporters: [
        "text",
        "lcov"
    ],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100
        }
    }
};