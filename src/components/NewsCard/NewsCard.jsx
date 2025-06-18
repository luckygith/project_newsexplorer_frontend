import React from 'react'
import { useState } from 'react'
import '../NewsCard/NewsCard.css'
import saveButton from '../../assets/saveButton.svg'
import unsaveButton from '../../assets/unsaveButton.svg'
import { useLocation } from 'react-router-dom'


function NewsCard({newsCard, handleLoginClick, handleSaveCard}) {

 function handleSave() {
handleSaveCard(newsCard);
 }

  const [isSaved, setIsSaved] = useState(newsCard.saved)

  return (
    <li className="news-card">
      <div className='news-card__container'>
      <div className="news-card__header">
      <button className='news-card__sign-to-save-button' onClick={handleLoginClick}>Sign in to save articles</button>
        <img className='news-card__save-button' onClick={() => handleSave(newsCard)} src={isSaved? saveButton:unsaveButton}  onClick={handleSave} alt="save article button" />
      </div>
        
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