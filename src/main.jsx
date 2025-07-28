import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import "./index.css";
import store from "./app/store";
import { ToggleThemeProvider } from "./Context/ToggleThemeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToggleThemeProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ToggleThemeProvider>
  </StrictMode>,
);
