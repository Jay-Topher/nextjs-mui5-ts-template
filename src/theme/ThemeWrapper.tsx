import { ThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";
import theme from "./theme";

function ThemeWrapper({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default ThemeWrapper;
