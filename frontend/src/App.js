import { BrowserRouter as Router,
  Routes,
  Route,
  Switch } from "react-router-dom";
import Navigation from "./partials/Navigation"
import Footer from "./partials/Footer";

/* === Pages === */ 
import appHeight from "./appHeight";

import Calendar from "./pages/Calendar";

function App() {
  return (
    <Router>
      <Navigation />
        <Routes>
          <Route element={<Calendar />} path="/calendar"></Route>
        </Routes>
      <Footer />

    </Router>
  );
}

export default App;
