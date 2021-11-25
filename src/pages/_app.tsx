import "../styles/globals.css";
import type { AppProps } from "next/app";
import ThemeWrapper from "../theme/ThemeWrapper";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux";
import store from "../store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeWrapper>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeWrapper>
    </Provider>
  );
}

export default MyApp;
