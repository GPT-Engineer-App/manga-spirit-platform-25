import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import StickyHeader from "./components/StickyHeader.jsx";
import Index from "./pages/Index.jsx";
import Onboarding from "./pages/Onboarding.jsx";
import CustomizeMerch from "./pages/CustomizeMerch.jsx";

function App() {
  return (
    <Router>
      <StickyHeader />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/customize-merch" element={<CustomizeMerch />} />
      </Routes>
    </Router>
  );
}

export default App;
