import React, { useEffect } from "react";
import "./index.scss";
import App from "./App";
import { createRoot } from "react-dom/client";

function AppWithCallbackAfterRender() {
  useEffect(() => {
    console.log("rendered");
  });

  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<AppWithCallbackAfterRender />);
