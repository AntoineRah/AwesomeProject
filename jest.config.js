export default {
  preset: 'react-native',
  setupFiles: ['<rootDir>/jest.setup.js'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transform: {
    '^.+\\.(js|ts|tsx)$': 'babel-jest',
  },
 transformIgnorePatterns: [
    'node_modules/(?!(react-native' +
      '|@react-native' +
      '|@react-navigation' +
      '|react-native-gesture-handler' +
      '|react-native-config' +
      '|@react-native-masked-view/masked-view' +
      '|react-native-skeleton-placeholder' +
      '|react-native-linear-gradient' +
      '|react-native-image-picker' +
      '|react-native-swipe-list-view' +
      ')/)',
  ],
  
};
