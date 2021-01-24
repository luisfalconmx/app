import React, { useState, useEffect } from 'react'
import '../assets/styles/App.scss'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Card from '../components/Card'
import Footer from '../components/Footer'

const App = () => {
  const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] })

  useEffect(() => {
    fetch('http://localhost:3000/initalState')
      .then(response => response.json())
      .then(data => setVideos(data))
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Search />
      {videos.trends.map(item =>
        <Card key={item.id} {...item} />
      )}
      <Footer />
    </div>
  )
}

export default App