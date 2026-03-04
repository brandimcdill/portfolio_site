import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Main from '../Main/Main'
import NavBar from '../NavBar/NavBar'
import Header from '../Header/Header'

import './App.css'

export default function App() {

  

  return (
  
    <div className="page">
      <div className="page__content">
        <NavBar />
        <Header />
        <Routes>
          <Route path='/' element={<Main />}></Route>
        </Routes>
      </div>
     
    </div>
  )
}


