import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import './App.css'
import Accueil from './pages/Accueil';
import Login from './pages/Login';

function App() {
 

  return (
    <div className="App">
       
       <Routes>
        <Route path='/' element={<Accueil />} />
        <Route path='/login' element={<Login />} />

      </Routes>

    </div>
  )
}

export default App
