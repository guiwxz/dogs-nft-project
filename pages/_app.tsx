import React from "react";
import { AppProps } from "next/app";
import { ComposedProviders } from "../src/store/composeProviders";
import AppWrapper from "../src/components/AppWrapper";

import "../src/config/global.css";


export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    // <Login />
    // <ThemeProvider theme={theme}>
    
    <ComposedProviders>
      <AppWrapper>
        {/*@ts-ignore*/}
        <Component {...pageProps} />
      </AppWrapper>
    </ComposedProviders>

    // </ThemeProvider>
  );
}