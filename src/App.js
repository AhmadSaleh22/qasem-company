import logo from './logo.svg';
import './App.css';
import { NavbarItem } from './components/Navbar/style';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Photo from './components/Photo/Photo';
import What from './components/What/What';
import Clients from './components/Clients/Clients';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Hero />
     <br />
     <br />
     <br />
     <br />

     <Photo />
     <What />
     <Clients />
    </div>
  );
}

export default App;
