import { Routes, Route } from "react-router-dom";
import BlurCard from "./pages/blurCard/blurCard";
import FrontPage from "./components/frontPage";
import NoMatch from "./components/noMatch";

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";

import "./App.scss";

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
