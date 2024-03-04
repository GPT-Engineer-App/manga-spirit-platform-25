import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import StickyHeader from "./components/StickyHeader.jsx";
import Index from "./pages/Index.jsx";

function App() {
  return (
    <Router>
      <StickyHeader />
      <Routes>
        <Route exact path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
