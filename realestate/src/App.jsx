import Companies from "./components/companies/Companies";
import Header from "./components/header/Header";
import Hero from "./components/Hero/Hero";
import "./app.css";
import Residence from "./components/residence/Residence";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residence />
    </div>
  );
}
export default App;
