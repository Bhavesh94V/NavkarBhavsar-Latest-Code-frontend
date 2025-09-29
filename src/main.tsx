import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./lib/store";
import { Provider } from "react-redux";
import "./index.css"; // CSS ko wapas import karo
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <HelmetProvider>
            <Provider store={store}>
                <App />
            </Provider>
        </HelmetProvider>
    </React.StrictMode>
);
