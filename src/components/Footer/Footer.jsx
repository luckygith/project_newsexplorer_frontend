import React from 'react'
import '../Footer/Footer.css'
import { Link } from 'react-router-dom'
import fb from '../../assets/fb.svg'
import github from '../../assets/github.svg'


function Footer() {
  return (
    <footer className="footer">
        <div className="footer__container">
<p className="footer__text">© 2024 Supersite, Powered by News API </p>
<div className="footer__links">
    <Link className='footer__links-hyperlink footer__links-home'>Home</Link>
    <Link className='footer__links-hyperlink footer__links-company`'>Tripleten</Link>
    <Link className='footer__links-social'> <img src={github} alt="github link" /></Link>
    <Link className='footer__links-social'><img src={fb} alt="facebook link" /></Link>
</div>
        </div>
    </footer>
  )
}

export default Footer