import './style.css'
import React from 'react'
import {BsFacebook,BsGithub,BsInstagram, BsLinkedin, BsYoutube} from 'react-icons/bs'
import {CgWebsite} from 'react-icons/cg'
import IntroImg from '../assets/profile.png'
const Intro = () => {
  return (
    <section id='intro-section'>
      <div className="left-part">
        <h1 className="intro-name">
          Hello, its me <br></br>Binaya <br />And I'm Frontend Developer
        </h1>
        <p className="intro-para">I am interested in frontend design and implementation.</p>
        <div className="intro-socials">
          <div className="intro-icon"><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/veenay.kdm"><BsFacebook  size="1.8rem" color='blue'/></a></div>
          <div className="intro-icon"><a target="_blank" rel="noopener noreferrer" href="https://github.com/binayakedem"><BsGithub  size="1.8rem" color='white'/></a></div>
          <div className="intro-icon"><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/itboostzone/"><BsInstagram  size="1.8rem" color='red'/></a></div>
          <div className="intro-icon"><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/binayalimbu/"><BsLinkedin  size="1.8rem" color='blue'/></a></div>
          <div className="intro-icon"><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCMloJqaLtYjSRkM7V_OvZww"><BsYoutube  size="1.8rem" color='red'/></a></div>
          <div className="intro-icon"><a target="_blank" rel="noopener noreferrer" href="https://binayalimbu.com.np/"><CgWebsite  size="1.8rem" color='white'/></a></div>
        </div>
        <div className="cv-download">
          <button className='cv-btn'>cv</button>
        </div>
      </div>
      <div className="right-part">
      <div className="intro-rotating"></div>
      <img src={IntroImg} alt="introimage" className='intro-img'/>
      </div>
      
    </section>
  )
}

export default Intro