import type { AppProps } from 'next/app'
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import {
  AppContainer,
  AppFooter,
  AppHeader,
  AppMain,
  GlobalAppStyle,
  theme,
} from '@/styles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NFT Explorer</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="NFT Explorer App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalAppStyle />

        <AppContainer>
          <AppHeader data-testid='app-header'>
            <h1>NFT Explorer</h1>
          </AppHeader>

          <AppMain data-testid='app-main'>
            <Component {...pageProps} />
          </AppMain>

          <AppFooter  data-testid='app-footer'>NFT Explorer</AppFooter>
        </AppContainer>
      </ThemeProvider>
    </>
  );
}
