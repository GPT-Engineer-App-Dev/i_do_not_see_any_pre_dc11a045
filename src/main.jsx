import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

if (import.meta.hot) {
  import.meta.hot.accept();
}

const root = ReactDOM.createRoot(document.getElementById("root"));

if (import.meta.hot) {
  import.meta.hot.accept();
}
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

if (import.meta.hot) {
  import.meta.hot.accept();
}
