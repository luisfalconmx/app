import React from 'react'
import '../assets/styles/App.scss'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Card from '../components/Card'

const App = () => (
  <div className="App">
    <Navbar />
    <Search />
    <Card />
  </div>
)

export default App