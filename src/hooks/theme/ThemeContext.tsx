import {ReactNode, createContext, useContext, useState} from 'react';
import {ThemeContextType} from './ThemeContext.type';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider = ({children}: {children: ReactNode}) => {
  const [isDark, setIsDark] = useState(false);
  const toggle = () => setIsDark(prev => !prev);
  const colors = {
    firstcolor: isDark ? '#393E46' : '328E6E',
    secondcolor: isDark ? '#393E46' : '67AE6E',
    thirdcolor: isDark ? '#948979' : '90C67C',
    textcolor: isDark ? '#DFD0B8' : 'E1EEBC',
    background: isDark ? '2C2C2C' : '328E6E',
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
