import React from 'react'
import '../NewsCard/NewsCard.css'

function NewsCard({item}) {
  return (
    <li className="news-card">
      <div className='news-card__container'>
    <img src={item.imageUrl} alt="article image" className="news-card__image" />
      <div className="news-card__text-container">
      <div className="news-card__content">

    <h3 className="news-card__date">{item.publishedAt}</h3>
    <h2 className="news-card__title">{item.title}</h2>
    <p className="news-card__description">{item.description}</p>
      </div>
     <h3 className="news-card__category">{item.category}</h3>
      </div>
      </div>
    </li>
  
  
  )
}

export default NewsCard