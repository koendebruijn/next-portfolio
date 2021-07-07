import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";
import { secondary } from "theme/colors";

const GlobalStyles = createGlobalStyle`
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}

body {
  background-color: ${secondary};
}
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
