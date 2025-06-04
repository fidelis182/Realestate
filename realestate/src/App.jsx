import Companies from "./components/companies/Companies";
import Header from "./components/header/Header";
import Hero from "./components/Hero/Hero";
import "./app.css";
import Residence from "./components/residence/Residence";
import Value from "./components/Value/Value";

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
      <Value />
    </div>
  );
}
export default App;
