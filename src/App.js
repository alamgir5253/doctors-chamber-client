
import './App.css';
import Navbar from './pages/Home/Header/Navbar';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Appointment from './pages/Appointment/Appointment';
import SignUp from './pages/SignUp/SignUp';
import RequireAuth from './pages/Shared/RequireAuth';
import Dashbord from './pages/Dashbord/Dashbord';
import MyReview from './pages/Dashbord/MyReview';
import MyAppointment from './pages/Dashbord/MyAppointment';
import History from './pages/Dashbord/History';
import Users from './pages/Dashbord/Users';

function App() {
  return (
    <div className=" max-w-7xl mx-auto px-5">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Signup' element={<SignUp />}></Route>
        <Route path='/Appointment' element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        }></Route>

        <Route path='/dashboard' element={<RequireAuth><Dashbord /></RequireAuth>}>
          <Route index element={<MyAppointment />} />
          <Route path='myreview' element={<MyReview />} />
          <Route path='history' element={<History />} />
          <Route path='users' element={<Users />} />

        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
