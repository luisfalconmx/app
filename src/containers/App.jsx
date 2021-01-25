import React, { useState, useEffect } from 'react'
import '../assets/styles/App.scss'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Card from '../components/Card'
import Footer from '../components/Footer'
import useInitialState from '../hooks/useInitialState'

const API = 'http://localhost:3000/initalState/'

const App = () => {
  const initialState = useInitialState(API)
  return (
    <div className="App">
      <Navbar />
      <Search />
      {initialState.trends.map(item =>
        <Card key={item.id} {...item} />
      )}
      <Footer />
    </div>
  )
}

export default App