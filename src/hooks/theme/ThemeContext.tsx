import {ReactNode, createContext, useContext, useState} from 'react';
import {ThemeContextType} from './ThemeContext.type';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider = ({children}: {children: ReactNode}) => {
  const [isDark, setIsDark] = useState(false);
  const toggle = () => setIsDark(prev => !prev);
  const colors = {
    firstcolor: isDark ? '#DDDDDD' : '#354349',
    secondcolor: isDark ? '#DDDDDD' : '#354349',
    thirdcolor: isDark ? '#393E46' : '#E7ECF0',
    textcolor: isDark ? '#F9B023' : '#F8F9FB',
    background: isDark ? '#F8F9FB' : '#1B262E',
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
