import React from 'react'
import '../Main/Main.css'
import { ItemsArray } from '../../utils/ItemsArray'
import NewsCard from '../NewsCard/NewsCard'
import Navigation from '../Navigation/Navigation'
import About from '../About/About'
import Footer from '../Footer/Footer'

function Main () {
  return (
<main className="main">





  <section className="news-cards__container">
 <h3 className="news-cards__title">Search Results</h3>
 <ul className="news-cards__list">

{ItemsArray.map((newsCard) => {
  return(
    <NewsCard newsCard={newsCard}
    key={newsCard._id} />
  )
})}



 </ul>
  </section>

</main>
  )
}

export default Main