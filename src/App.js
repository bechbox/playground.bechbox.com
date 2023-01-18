import { Routes, Route } from "react-router-dom";
import BlurCard from "./pages/blurCard/blurCard";
import FrontPage from "./pages/frontPage";
import NoMatch from "./pages/noMatch";
import TheButton from "./pages/theButton";
import AnotherButtonaPage from "./pages/anotherButtonPage";

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
      <Route exact path="/another-button" element={<AnotherButtonaPage />} />
      <Route exact path="/the-button" element={<TheButton />} />
      <Route exact path="/blur-card" element={<BlurCard />} />
      <Route exact path="/" element={<FrontPage />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;
