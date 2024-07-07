import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';
import { Service } from './Pages/Service';
import { Register } from './Pages/Register';
import { Login } from './Pages/Login';
import { Navbar } from './components/Navbar';
import { Logout } from './Pages/Logout';
import {Adminlayout} from './components/layouts/Adminlayout'; // Assuming correct import path
import {Adminusers} from './Pages/Adminusers'; // Assuming correct import path

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/admin' element={<Adminlayout />}>
            <Route path='users' element={<Adminusers />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
