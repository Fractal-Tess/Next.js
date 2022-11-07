import '$styles/globals.css';
import NextApp, {
  AppContext,
  AppInitialProps,
  AppProps as NextAppProps
} from 'next/app';
import { Theme } from '$types/Theme';

import { themeFromCookie } from '$utils/theme';
import Header from '$components/header/Header';
import Footer from '$components/footer/Footer';
import ThemeProvider from '$context/ThemeProvider';

type AppProps = { cookieTheme: Theme | null };
type CombineProps<T> = AppProps & T;

export function App({
  Component,
  pageProps,
  cookieTheme
}: CombineProps<NextAppProps>) {
  return (
    <ThemeProvider cookieTheme={cookieTheme}>
      <div className="flex flex-col bg-gradient-to-t from-base-300 to-base-100 min-h-screen">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

App.getInitialProps = async (
  context: AppContext
): Promise<CombineProps<AppInitialProps>> => {
  const cookieTheme = themeFromCookie(context.ctx.req?.headers.cookie);
  const ctx = await NextApp.getInitialProps(context);
  return { ...ctx, cookieTheme };
};

export default App;
