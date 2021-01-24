import React from 'react'
import '../assets/styles/components/Card.scss'
import Cover from '../assets/static/cover.png'

const Card = ({ cover, title, year, contentRating, duration }) => (
  <div className="card">
    <a className="card__link" href="#">
      <div className="card__cover">
        <img className="card__image" src={cover} alt={title} />
      </div>
      <div className="card__content">
        <h2 className="card__title">{title}</h2>
        <small className="card__date">
          {`${year} ${contentRating} ${duration}`}
        </small>
      </div>
    </a>
  </div>
)

export default Card