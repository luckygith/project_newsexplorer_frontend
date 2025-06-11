import React from 'react'
import '../NewsCard/NewsCard.css'


function NewsCard({newsCard}) {
  return (
    <li className="news-card">
      <div className='news-card__container'>
    <img src={newsCard.imageUrl} alt="article image" className="news-card__image" />
      <div className="news-card__text-container">
      <div className="news-card__content">

    <h3 className="news-card__date">{newsCard.publishedAt}</h3>
    <h2 className="news-card__title">{newsCard.title}</h2>
    <p className="news-card__description">{newsCard.description}</p>
      </div>
     <h3 className="news-card__category">{newsCard.category}</h3>
      </div>
      </div>
    </li>
  
  
  )
}

export default NewsCard