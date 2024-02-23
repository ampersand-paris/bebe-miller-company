import { BrowserRouter as Router,
  Routes,
  Route,
  Switch } from "react-router-dom";
import Navigation from "./partials/Navigation"
import Footer from "./partials/Footer";

/* === Pages === */ 
import appHeight from "./appHeight";

import ArchiveDetail from "./pages/ArchiveDetail";
import ArchiveMenu from "./pages/ArchiveMenu/ProjectMenu";
import CalendarLogic from "./pages/CalendarLogic";
import About from "./pages/About";
import Forum from "./pages/Forum";
import ForumDetail from "./pages/ForumDetail";

function App() {
  return (
    <Router>
      <Navigation />
        <Routes>
          <Route element={<About />} path="/about"></Route>
          <Route element={<ArchiveMenu />} path="/archives"></Route>
          <Route element={<ArchiveDetail />} path="/archives/:id"></Route>
          <Route element={<CalendarLogic />} path="/calendar"></Route>
          <Route element={<Forum />} path="/forum"></Route>
          <Route element={<ForumDetail />} path="/forum/:id"></Route>
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
