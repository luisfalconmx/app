import React from 'react'
import '../assets/styles/components/Search.scss'

const Search = () => (
  <div className="search">
    <input className="search__input" type="text" placeholder="Buscar un tutorial" />
    <button className="search__button">Buscar</button>
  </div>
)

export default Search;