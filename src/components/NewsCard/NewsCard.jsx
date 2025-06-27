import React from 'react';
import { useState } from 'react';
import '../NewsCard/NewsCard.css';
import saveButton from '../../assets/saveButton.svg';
import unsaveButton from '../../assets/unsaveButton.svg';
import { useLocation } from 'react-router-dom';
import { formatDate } from '../../utils/constants';


function NewsCard({newsCard, handleLoginClick, handleSaveCard}) {

 function handleSave() {
handleSaveCard(newsCard);
 }

 const formattedPublishedAt = formatDate(newsCard.publishedAt);

  const [isSaved, setIsSaved] = useState(newsCard.saved);



  return (
    <li className="news-card">
      <div className='news-card__container'>
      <div className="news-card__header">
      <button className='news-card__sign-to-save-button' onClick={handleLoginClick}>Sign in to save articles</button>
        <img className='news-card__save-button' src={isSaved? saveButton:unsaveButton}  onClick={handleSave} alt="save article button" />
      </div>
        
    <img src={newsCard.urlToImage} alt="article image" className="news-card__image" />
      <div className="news-card__text-container">
      <div className="news-card__content">

    <h3 className="news-card__date">{formattedPublishedAt}</h3>
    <h2 className="news-card__title">{newsCard.title}</h2>
    <p className="news-card__description">{newsCard.description}</p>
      </div>
     <h3 className="news-card__category">{newsCard.source.name}</h3>
      </div>
      </div>
    </li>
  
  
  )
}

export default NewsCard