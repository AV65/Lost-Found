import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ReportFound from "./pages/ReportFound";
import ReportLost from "./pages/ReportLost";
import SearchItems from './pages/SearchItems';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/search" element={<SearchItems />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/report-lost" element={<ReportLost />} />
        <Route path="/report-found" element={<ReportFound />} />
        {/* Add other routes like /search, /report-lost, etc. */}
      </Routes>
    </Router>
  );
}

export default App;
