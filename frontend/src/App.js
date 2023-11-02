import { Container, Row, Col } from "react-bootstrap"
import './App.css';
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomeScreen from "./screens/HomeScreen";
function App() {
  return (
    <>
    <Header />
      <main>
        <Container>
          
          <h1>Parv-Shan</h1>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
