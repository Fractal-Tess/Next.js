import { type Theme, themes } from '$types/Theme';
import { parse } from 'cookie';

export const themeFromCookie = (cookie: string | undefined): Theme | null => {
  if (!cookie) return null;
  const { theme } = parse(cookie) as {
    theme: string | undefined;
  };
  if (!theme) return null;

  if (isTheme(theme)) {
    return theme;
  } else {
    console.log(`Received invalid theme: ${theme}`);
    return null;
  }
};

const isTheme = (theme: string): theme is Theme => {
  return themes.includes(theme as Theme);
};
