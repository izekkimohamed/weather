import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";

import GlobaleContext from "./context";
import App from "./App";
import { GlobalStyle } from "./styles/GlobalStyles";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <GlobaleContext>
      <QueryClientProvider client={client}>
        <GlobalStyle />
        <App />
      </QueryClientProvider>
    </GlobaleContext>
  </>,
);
