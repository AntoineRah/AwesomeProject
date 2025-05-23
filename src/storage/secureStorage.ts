import * as Keychain from 'react-native-keychain';

export const secureStorage = {
  getItem: async (key: string) => {
    const credentials = await Keychain.getGenericPassword({service: key});
    if (credentials) {
      try {
        return JSON.parse(credentials.password);
      } catch (e) {
        console.warn('Failed to parse stored data:', e);
        return null;
      }
    }
    return null;
  },

  setItem: async (key: string, value: any) => {
    const stringified = JSON.stringify(value);
    await Keychain.setGenericPassword('user', stringified, {service: key});
  },

  removeItem: async (key: string) => {
    await Keychain.resetGenericPassword({service: key});
  },
};
