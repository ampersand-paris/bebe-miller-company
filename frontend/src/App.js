import { BrowserRouter as Router,
  Routes,
  Route } from "react-router-dom";
import Navigation from "./partials/Navigation"
import Footer from "./partials/Footer";

function App() {
  return (
    <Router>
      <Navigation />
      <Footer />
    </Router>
  );
}

export default App;
