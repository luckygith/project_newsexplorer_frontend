import React from 'react'
import { useLocation } from 'react-router-dom'
import '../Main/Main.css'
import { ItemsArray } from '../../utils/ItemsArray'
import NewsCard from '../NewsCard/NewsCard'
import Navigation from '../SearchForm/SearchForm'
import About from '../About/About'
import Footer from '../Footer/Footer'

function Main ({handleLoginClick, handleSaveCard}) {

 const location = useLocation();
 const savedNewsPagePath = location.pathname === "/saved-news"
 const newsCardsTitleStyle = {
    visibility: savedNewsPagePath ? "hidden" : "visible",
  }



  return (
<main className="main">
  <section className="news-cards__container">
 <h3 style={newsCardsTitleStyle} className="news-cards__title">Search Results</h3>
 <ul className="news-cards__list">

{ItemsArray.map((newsCard) => {
  return(
    <NewsCard newsCard={newsCard}
    key={newsCard._id} handleLoginClick={handleLoginClick} 
    handleSaveCard={handleSaveCard}/>
  )
})}

 </ul>
  </section>

</main>
  )
}

export default Main