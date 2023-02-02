
import './App.css'
import React from 'react'
import Home from './Components/Home';
import Students from './Components/Student';
import Contactus from './Components/Contactus';
import Navbar from './Components/Navbar';
import Edit from './Components/Edit';
import Addstudent from './Components/Addstudent';

import { Routes,Route } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <Navbar/>
     
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Students" element={<Students/>}/>
          <Route path="/Contact" element={<Contactus/>}/>
          <Route path="/Edit" element={<Edit/>}/>
          <Route path="/Addstudent" element={<Addstudent/>}/>
   </Routes>
  
    </div>
  )
}

export default App