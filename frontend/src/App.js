import { BrowserRouter as Router,
  Routes,
  Route,
  Switch } from "react-router-dom";
import Navigation from "./partials/Navigation"
import Footer from "./partials/Footer";

/* === Pages === */ 
import appHeight from "./appHeight";

import ArchiveDetail from "./pages/ArchiveDetail";
import ArchiveMenu from "./partials/ArchiveMenu/ProjectMenu";
import CalendarLogic from "./pages/CalendarLogic";

function App() {
  return (
    <Router>
      <Navigation />
        <Routes>
          <Route element={<ArchiveMenu />} path="/archives"></Route>
          <Route element={<ArchiveDetail />} path="/archives/:id"></Route>
          <Route element={<CalendarLogic />} path="/calendar"></Route>
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
