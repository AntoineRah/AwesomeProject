import axios from 'axios';
import Config from 'react-native-config';
import {useAuthStore} from '../hooks/authentication';
import {getNewTokens} from './auth';

const axiosInstance = axios.create({
  baseURL: Config.BASE_URL,
  //timeout: parseInt(Config.TIMEOUT || '10000', 10),
  headers: {
    'Content-Type': 'application/json',
  },
});

const waitForHydration = async () => {
  while (!useAuthStore.getState().hydrated) {
    await new Promise(resolve => setTimeout(resolve, 50));
  }
};

let refreshing: Promise<string | null> | null = null;

const refreshTokenIfNeeded = async (): Promise<string | null> => {
  await waitForHydration();

  const {accessToken, refreshToken, expiresAt, clearTokens, setTokens} =
    useAuthStore.getState();

  const currentTime = Date.now();
  const isExpiring = expiresAt && currentTime > expiresAt - 60000;

  if (!refreshToken) {
    clearTokens();
    throw new Error('No refresh token available');
  }

  if (!isExpiring) {
    return accessToken;
  }

  if (refreshing) {
    return refreshing;
  }

  refreshing = (async () => {
    try {
      const response = await getNewTokens(refreshToken, '3m');
      if (response?.data?.accessToken && response?.data?.refreshToken) {
        setTokens(response.data.accessToken, response.data.refreshToken, '3m');
        return response.data.accessToken;
      } else {
        throw new Error('Invalid refresh token response');
      }
    } catch (err) {
      clearTokens();
      throw err;
    } finally {
      refreshing = null;
    }
  })();

  return refreshing;
};

const interceptorExceptions = [
  '/api/auth/login',
  '/api/auth/signup',
  '/api/auth/verify-otp',
];

axiosInstance.interceptors.request.use(
  async config => {
    if (interceptorExceptions.some(path => config.url?.includes(path))) {
      return config;
    }
    const token = await refreshTokenIfNeeded();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    if (error.response?.status === 401) {
      const {clearTokens} = useAuthStore.getState();
      clearTokens();
    }
    return Promise.reject(error);
  },
);

export {axiosInstance};
