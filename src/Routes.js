import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import Info from './Components/Info'
import About from './Components/About';
import Reviews from './Components/Reviews';
import Doctors from './Components/Doctors';
import Appointment from './Pages/Appointment';
import BookAppointment from './Components/BookAppointment';
import Legal from './Pages/Legal';

const Routing = () => {
  return (
   
        <Routes>
          
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<Info />} />
            <Route path="/about" element={<About />} />
            <Route path="/review" element={<Reviews />} />
            <Route path="/doctor" element={<Doctors />} />

            <Route path="/appointment" element={<Appointment />} />
            <Route path="/book-appointment" element={<BookAppointment />} />
            <Route path='/legal' element={<Legal/>}/>
            
        </Routes>

    
  )
}

export default Routing;