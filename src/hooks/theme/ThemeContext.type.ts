export type ThemeContextType = {
  isDark: boolean;
  toggle: () => void;
  colors: {
    firstcolor: string;
    secondcolor: string;
    thirdcolor: string;
    textcolor: string;
    background: string;
  };
};
