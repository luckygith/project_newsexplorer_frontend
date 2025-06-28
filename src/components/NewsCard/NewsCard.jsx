import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import '../NewsCard/NewsCard.css';
import saveButton from '../../assets/saveButton.svg';
import unsaveButton from '../../assets/unsaveButton.svg';
import trash from '../../assets/trash.svg';
import { useLocation } from 'react-router-dom';
import { formatDate } from '../../utils/constants';



function NewsCard({newsCard, handleLoginClick, handleSaveCard}) {

  const currentUser = useContext(CurrentUserContext);
  const isLoggedIn = currentUser && currentUser.username;


 function handleSaveClick() {
  if (!isLoggedIn) {
    return;
  }
  setIsSaved(!isSaved);
  handleSaveCard(newsCard);
 }

 function handleRemoveClick() {
  if (!isLoggedIn) {
    return;
  }
  console.log("handleremove clicked");
 }

  const formattedPublishedAt = formatDate(newsCard.publishedAt);

  const [isSaved, setIsSaved] = useState(newsCard.saved);

  const location = useLocation();
  const savedNewsPagePath = location.pathname === "/saved-news"

  return (
    <li className="news-card">
      <div className='news-card__container'>
      <div className="news-card__header">
      {savedNewsPagePath ? (
    <>
      <button className='news-card__remove-from-saved'>Remove from saved</button>
      <img
        className='news-card__trash-button'
        src={trash}
        onClick={handleRemoveClick}
        alt="remove saved article button"
      />
    </>
  ) : (
    <>
    {!isLoggedIn && (
        <button className='news-card__sign-to-save-button' onClick={handleLoginClick}>
        Sign in to save articles
        </button>)}

        <img
          className='news-card__save-button'
          src={isSaved ? saveButton : unsaveButton}
          onClick={isLoggedIn ? handleSaveClick : undefined}
          alt="save article button"
        />
    
    </>
  )}
</div>
    <img src={newsCard.urlToImage} alt="article image" className="news-card__image" />
      <div className="news-card__text-container">
      <div className="news-card__content">
    <h3 className="news-card__date">{formattedPublishedAt}</h3>
    <h2 className="news-card__title">{newsCard.title}</h2>
    <p className="news-card__description">{newsCard.description}</p>
      </div>
     <h3 className="news-card__category">{newsCard.source}</h3>
      </div>
      </div>
    </li>
  
  
  )
}

export default NewsCard