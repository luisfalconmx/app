import React from 'react'
import '../assets/styles/App.scss'
import Navbar from '../components/Navbar'
import Search from '../components/Search'

const App = () => (
  <div className="App">
    <Navbar />
    <Search />
  </div>
)

export default App