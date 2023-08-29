import React, { useEffect } from "react";
import "./index.scss";
import App from "./App";
import { createRoot } from "react-dom/client";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";

function AppWithCallbackAfterRender() {
  useEffect(() => {
    console.log("rendered");
  });

  return (
    <React.StrictMode>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </React.StrictMode>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<AppWithCallbackAfterRender />);
