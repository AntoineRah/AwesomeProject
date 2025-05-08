import {ReactNode} from 'react';

type AuthStoreType = {
  isAuth: boolean;
  login: () => void;
  logout: () => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

export type {AuthStoreType, AuthProviderProps};
