
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About';

import Appointment from './Pages/Appointments/Appointment';
import Home from './Pages/Home/Home';
import Review from './Pages/Home/Review';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound';
import Header from './Pages/Shared/Header';

function App() {
  return (
    <div>
      <Header></Header>
     <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/home' element={<Home/>}></Route>
       <Route path='/about' element={<About/>}></Route>
       <Route path='/login' element={<Login/>}></Route>
       <Route path = '/review' element={<Review/>}></Route>
       <Route path='/appointment' element={<Appointment></Appointment>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
    </div>
  );
}

export default App;
