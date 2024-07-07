import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Service from './Pages/Service'
import { Navbar } from './components/Navbar'
import { Error } from './Pages/Error'
import Logout from './Pages/Logout'
import Adminlayout from './components/layouts/adminlayout'
import Adminusers from './Pages/adminusers'
import Adminupdate from './Pages/adminupdate'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/service' element={<Service />} />
          <Route path='/*' element={<Error />} />
          <Route path='/logout' element={<Logout />} />
          <Route exact path='/admin' element={<Adminlayout />}>
            <Route path='users' element={<Adminusers />} />.
          </Route>
          <Route path='/admin/users/:id/edit' element={<Adminupdate />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
