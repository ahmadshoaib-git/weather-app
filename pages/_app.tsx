import type { AppProps } from "next/app";
import { useDarkTheme } from "hooks";
import Theme from "theme";
import { GlobalStyle } from "styles/global.style";
import Layout from "layout";

function MyApp({ Component, pageProps }: AppProps) {
  const {
    theme,
    // themeToggler
  } = useDarkTheme();
  return (
    <Theme theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Theme>
  );
}

export default MyApp;
