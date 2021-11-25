import "../styles/globals.css";
import type { AppProps } from "next/app";
import ThemeWrapper from "../theme/ThemeWrapper";
import CssBaseline from "@mui/material/CssBaseline";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeWrapper>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeWrapper>
  );
}

export default MyApp;
