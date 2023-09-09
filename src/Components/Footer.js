import React from 'react'
import './style.css'
import {BsFacebook,BsGithub,BsInstagram, BsLinkedin, BsYoutube} from 'react-icons/bs'
import {CgWebsite} from 'react-icons/cg'
const Footer = () => {
  return (
    <footer className='footer'>
      <div className="connect-me"><h2>Social Links</h2></div>
      <div className="social-links">
      <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/veenay.kdm"><BsFacebook  size="1.8rem" color='blue'/></a>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/binayakedem"><BsGithub  size="1.8rem" color='white'/></a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/itboostzone/"><BsInstagram  size="1.8rem" color='red'/></a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/binayalimbu/"><BsLinkedin  size="1.8rem" color='blue'/></a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCMloJqaLtYjSRkM7V_OvZww"><BsYoutube  size="1.8rem" color='red'/></a>
      <a target="_blank" rel="noopener noreferrer" href="https://binayalimbu.com.np/"><CgWebsite  size="1.8rem" color='white'/></a>
      </div>
      <div className="copyright">All rights reserved 2023.</div>
    </footer>
  )
}

export default Footer