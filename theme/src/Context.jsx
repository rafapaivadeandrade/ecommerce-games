import React from 'react';
import StyledTheme from './Theme';
import {ThemeProvider as StyledThemeProvider} from 'styled-components';

export const ThemeContext = React.createContext({
  styledTheme: StyledTheme,
});

export const ThemeContextProvider = ({theme, children}) => {

  const value = {
    styledTheme: StyledTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={StyledTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
