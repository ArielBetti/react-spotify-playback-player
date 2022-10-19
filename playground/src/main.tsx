import React from "react";
import ReactDOM from "react-dom/client";

import Playground from "./components";
import { PlaygroundProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PlaygroundProvider>
      <Playground />
    </PlaygroundProvider>
  </React.StrictMode>
);
