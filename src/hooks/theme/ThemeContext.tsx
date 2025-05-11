import {ReactNode, createContext, useContext, useState} from 'react';
import {ThemeContextType} from './ThemeContext.type';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider = ({children}: {children: ReactNode}) => {
  const [isDark, setIsDark] = useState(false);
  const toggle = () => setIsDark(prev => !prev);
  const colors = {
    firstcolor: isDark ? '#948979' : '#328E6E',
    secondcolor: isDark ? '#393E46' : '#129990',
    thirdcolor: isDark ? '#393E46' : '#90D1CA',
    textcolor: isDark ? '#DFD0B8' : '#E1EEBC',
    background: isDark ? '#2C2C2C' : '#096B68',
  };
  return (
    <ThemeContext.Provider value={{isDark, toggle, colors}}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('Must be wrapped in themeprovider');
  }
  return context;
};

export {ThemeProvider, useTheme};
