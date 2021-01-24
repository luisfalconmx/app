import React, { useState, useEffect } from 'react'
import '../assets/styles/App.scss'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Card from '../components/Card'
import Footer from '../components/Footer'

const App = () => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/initalState')
      .then(response => response.json())
      .then(data => setVideos(data))
  }, [])

  console.log(videos)

  return (
    <div className="App">
      <Navbar />
      <Search />
      <Card />
      <Footer />
    </div>
  )
}

export default App