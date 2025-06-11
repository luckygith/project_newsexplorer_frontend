import React from 'react'
import '../Main/Main.css'
import { ItemsArray } from '../../utils/ItemsArray'
import NewsCard from '../NewsCard/NewsCard'

function Main () {
  return (
<main className="main">
  
  <section className="news-cards__container">
 <h3 className="news-cards__title">Search Results</h3>
 <ul className="news-cards__list">

{ItemsArray.map((item) => {
  return(
    <NewsCard item={item}/>
  )
})}



{/* {newsCards.map((newsCard) => {
  return (
    <NewsCard key={news-card}
    news-card={news-card}/>
  )
})} */}

 </ul>
  </section>
</main>
  )
}

export default Main