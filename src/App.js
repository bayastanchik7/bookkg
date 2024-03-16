import { Route, Routes } from 'react-router-dom';
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/index";
import Categori from "./components/Categori";
import Jurok from "./components/Jurok";
import Admin from './components/pages/Admin';
import MainRoutes from './route/MainRoutes';
import AllComponents from './components/AllComponents';

function App() {
  return (
    <div className="App">
      <Routes>  
      <Route path='/' element={<AllComponents/>}/>
      <Route path='/admin' element={<Admin/>}/>
     </Routes>
      <Hero />
      <Categori/>
      <Jurok />
      <MainRoutes />
      
    </div>
  );
}

export default App;
