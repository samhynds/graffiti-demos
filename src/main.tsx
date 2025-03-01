import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, theme } from "@samgl/graffiti-ui";

import DemoBar from "./DemoBar";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <DemoBar />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
