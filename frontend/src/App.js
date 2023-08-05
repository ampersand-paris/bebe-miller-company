import { BrowserRouter as Router,
  Routes,
  Route,
  Switch } from "react-router-dom";
import Navigation from "./partials/Navigation"
import Footer from "./partials/Footer";

/* === Pages === */ 
import appHeight from "./appHeight";

import CalendarLogic from "./pages/CalendarLogic";

function App() {
  return (
    <Router>
      <Navigation />
        <Routes>
          <Route element={<CalendarLogic />} path="/calendar"></Route>
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
