export default {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'png', 'jpg', 'html'],
  collectCoverage: false,
  collectCoverageFrom: [
    '**/src/**/*.{js,ts,tsx}',
    '!**/node_modules/*',
    '!__tests/*',
    '!src/**/*{styles,i18n}.{js,ts}',
    '!src/**/config/*.{js,ts}',
    '!src/**/constants/*.{js,ts}'
  ],
  coveragePathIgnorePatterns: ['/node_modules/', '/jest'],
  setupFiles: ['./setup.js'],
  setupFilesAfterEnv: ['./tests-setup.ts'],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  transformIgnorePatterns: [
    '/node_modules/(?!native-base)/',
    '/node_modules/@react-native-community/async-storage/(?!(lib))',
    'node_modules/(?!(jest-)?@?react-native|react-native*|react-redux|loreact-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation*|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@react-native-firebase/app)'
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.history/', '/__tests__/utils/*']
};
