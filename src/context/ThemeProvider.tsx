import { defaultTheme, type Theme } from '$types/Theme';
import Cookies from 'js-cookie';
import { PropsWithChildren, useState } from 'react';

import { createContext } from 'react';

const ONE_YEAR = 1000 * 86400 * 365;

export type ThemeState = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeCtx = createContext<ThemeState | null>(null);

type Props = {
  cookieTheme: Theme | null;
} & PropsWithChildren;

export default function ThemeProvider({ children, cookieTheme }: Props) {
  const [theme, setTheme] = useState<Theme>(cookieTheme || defaultTheme);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    Cookies.set('theme', nextTheme, {
      path: '/',
      expires: new Date(new Date().getTime() + ONE_YEAR)
    });
  };
  return (
    <ThemeCtx.Provider value={{ theme, toggleTheme }}>
      <div className={theme} data-theme={theme}>
        {children}
      </div>
    </ThemeCtx.Provider>
  );
}
