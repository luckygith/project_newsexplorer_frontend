import React from 'react'
import '../NewsCard/NewsCard.css'

function NewsCard({item}) {
  return (
    <li className="news-card">
      <div className='news-card__container'>
    <h2 className="news-card__title">{item.name}</h2>
    <img src={item.imageUrl} alt="article image" className="news-card__image" />
      </div>
      <div className="news-card__text-container">
        helo
      </div>
    </li>
  
  
  )
}

export default NewsCard