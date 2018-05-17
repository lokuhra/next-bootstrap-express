import React from "react";
import App from "../components/App";

import { ContextProvider } from "../components/Carga/ContextProvider/index";
import Consumer from "../components/Carga/Consumer/index";

const Context = () => (
  <App title="Context">
      <ContextProvider>
        <Consumer />
      </ContextProvider>
  </App>
);

export default Context;
