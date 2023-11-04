import { Container } from "react-bootstrap"
import './App.css';
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { BrowserRouter as Router } from "react-router-dom"
import {AllRoutes} from "./screens/AllRoutes";
function App() {
  return (
    <Router>
      <Header />
      <main className="my-3">
        <Container>

          <h1>Parv-Shan</h1>
          
          <AllRoutes />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
