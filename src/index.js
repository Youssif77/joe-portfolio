import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./redux/reducers";

import "./index.css";
import App from "./App";
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";

const store = createStore(reducer);

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      {/* <ColorModeScript initialColorMode={theme.config.initialColorMode}> */}
      <Provider store={store}>
        <App />
      </Provider>
      {/* </ColorModeScript> */}
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
