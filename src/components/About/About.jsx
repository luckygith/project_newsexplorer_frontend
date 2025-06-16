import React from 'react'
import '../About/About.css'
import author from "../../assets/author.jpg"

function About () {
  return (
    
    <section className="author">
<img src={author} alt="" className="author__image" />
<div className="author__content">
    <p className="author__title">About the author</p>
    <p className="author__description">
    This block describes the project author. Here you should indicate your name, what you do, and which development technologies you know.
<p>You can also talk about your experience with TripleTen, what you learned there, and how you can help potential customers.
    </p>
    </p>
</div>

    </section>
  )
}

export default About