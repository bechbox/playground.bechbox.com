import { Routes, Route } from "react-router-dom";
import BlurCard from "./pages/blurCard/blurCard";
import FrontPage from "./components/frontPage";
import NoMatch from "./components/noMatch";

import "@fontsource/inter";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route exact path="/blur-card" element={<BlurCard />} />
      <Route exact path="/" element={<FrontPage />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;
