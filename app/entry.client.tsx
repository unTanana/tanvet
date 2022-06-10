import { CacheProvider, ThemeProvider } from "@emotion/react";
import { CssBaseline, GlobalStyles } from "@mui/material";
import { RemixBrowser } from "@remix-run/react";
import { hydrate } from "react-dom";
import { createEmotionCache } from "./create-emotion-cache";
import { globalStyles } from "./global-styles";
import { theme } from "./theme";

const emotionCache = createEmotionCache();

hydrate(
  <CacheProvider value={emotionCache}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      <RemixBrowser />
    </ThemeProvider>
  </CacheProvider>,
  document
);
