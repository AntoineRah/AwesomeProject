import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock('@react-native-camera-roll/camera-roll', () => {
  return {
    CameraRoll: {
      getPhotos: jest.fn().mockResolvedValue({edges: []}),
      save: jest.fn().mockResolvedValue('mock-path'),
    },
  };
});
jest.mock('react-native-fs', () => ({
  readFile: jest.fn(),
  writeFile: jest.fn(),
  exists: jest.fn(),
  mkdir: jest.fn(),
  unlink: jest.fn(),
  downloadFile: jest.fn().mockReturnValue({
    promise: Promise.resolve({jobId: 1, statusCode: 200}),
  }),
  DocumentDirectoryPath: '/mock/documents',
  ExternalDirectoryPath: '/mock/external',
}));

jest.mock('@notifee/react-native', () => ({
  onForegroundEvent: jest.fn(),
  onBackgroundEvent: jest.fn(),
  requestPermission: jest.fn(),
  createChannel: jest.fn(),
  displayNotification: jest.fn(),
}));

jest.mock('react-native-gesture-handler', () => ({
    GestureHandlerRootView: jest.fn(({ children }) => children),
}));
