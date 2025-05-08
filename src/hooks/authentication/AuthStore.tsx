import {createContext, useContext, useState} from 'react';
import {AuthProviderProps, AuthStoreType} from './AuthStore.type';

const AuthStore = createContext<AuthStoreType | undefined>(undefined);

const AuthProvider = ({children}: AuthProviderProps) => {
  const [isAuth, setAuth] = useState(false);
  const login = () => {
    setAuth(true);
  };
  const logout = () => {
    setAuth(false);
  };
  return (
    <AuthStore.Provider value={{isAuth, login, logout}}>
      {children}
    </AuthStore.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthStore);
  if (!context) {
    throw new Error('use auth must be used inside a provider');
  }
  return context;
};
export {AuthProvider, useAuth};
