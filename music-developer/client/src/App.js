import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import BandsInStatePage from "./components/pages/BandsInState";
import Landing from "./components/pages/Landing";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
    <ApolloProvider client={client}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/localBands" element={<BandsInStatePage />} />
        </Routes>
        <Footer />
      </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
