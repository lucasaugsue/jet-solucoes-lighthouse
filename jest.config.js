module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss|sss|styl)$': 'identity-obj-proxy',
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
  testMatch: ['<rootDir>/tests/**/*.test.(ts|tsx)'],
};
