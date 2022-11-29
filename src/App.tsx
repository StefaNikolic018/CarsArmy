import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import Content from "./components/Content";
import FirebaseContextProvider from "./contexts/FirebaseContext";
import "./scss/main.scss";

// QueryClient needs to be initialized before use of Firebase React Query
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FirebaseContextProvider>
        <Content />
      </FirebaseContextProvider>
    </QueryClientProvider>
  );
}

export default App;
