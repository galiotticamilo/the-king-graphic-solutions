import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from "./components/Home/Home"
import AboutUs from "./components/AboutUs/AboutUs"
import Contact from "./components/Contact/Contact"
import Services from "./components/Services/Services"
import {Switch, Route, BrowserRouter} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/contacto">
          <Contact/>
        </Route>
        <Route exact path="/servicios">
          <Services/>
        </Route>
        <Route exact path="/nosotros">
          <AboutUs/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
