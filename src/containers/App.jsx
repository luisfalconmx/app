import React from 'react'
import '../assets/styles/App.scss'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Card from '../components/Card'
import Footer from '../components/Footer'

const App = () => (
  <div className="App">
    <Navbar />
    <Search />
    <Card />
    <Footer />
  </div>
)

export default App