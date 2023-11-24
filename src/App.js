import './App.css'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Servicos from './components/Servicos';
import Contato from './components/Contato';
import Sobre from './components/Sobre';
import { FaHome } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { HiMiniCursorArrowRays } from "react-icons/hi2";
import { FaUserLarge } from "react-icons/fa6";


function App() {


  return (
    <div>
      <BrowserRouter>

        <ul>
          <li><Link to="/" ><FaHome />home</Link> </li>
          <li><Link to="/contato"><RiCustomerService2Fill />contato</Link> </li>
          <li><Link to="/servicos"><HiMiniCursorArrowRays />Serviços</Link> </li>
          <li><Link to="/sobre"><FaUserLarge />sobre nos</Link> </li>

        </ul>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/sobre" element={<Sobre />} />

        </Routes>
      </BrowserRouter>

<p>rodape</p>

    </div>

  );
}

export default App;
