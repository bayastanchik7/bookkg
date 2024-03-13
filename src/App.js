import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/index";
import Categori from "./components/Categori";
import Jurok from "./components/Jurok";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Categori />
      <Jurok />
    </div>
  );
}

export default App;
