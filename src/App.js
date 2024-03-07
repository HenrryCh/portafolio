import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <NavBar/>
      <SocialLinks/>
      <Home name= "inicio"/>
      <About name="sobre mi"/>
      <Portfolio name="portafolio"/>
      <Skills name="habilidades"/>
      <Contact name="contacto"/>
    </div>
  );
}

export default App;
