
import './App.css';
import Navbar from './pages/Home/Header/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Appointment from './pages/Appointment/Appointment';

function App() {
  return (
    <div className=" max-w-7xl mx-auto px-10">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/Appointment' element={<Appointment />}></Route>
      </Routes>
    </div>
  );
}

export default App;
