import React from 'react'
import '../assets/styles/components/Card.scss'

const Card = () => (
  <div className="card">
    <a className="card__link" href="#">
      <div className="card__cover">
        <img className="card__image" src="https://i.redd.it/tk46u5nrkxm21.png" alt=""/>
      </div>
      <div className="card__content">
        <h2 className="card__title">Business stakeholders review wireframes to ensure that</h2>
        <small className="card__date">23 March 2021</small>
      </div>
    </a>
  </div>
)

export default Card