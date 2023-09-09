import './style.css'
import React from 'react'
import Profile from '../assets/person.png'
const About = () => {
  return (
    <section id="about">
      <div className="about-heading"><h1>About Me</h1></div>
      <div className="about-container">
        <section className="about-left">

          <div className="about-imgs"><img className="about-img"src={Profile} alt="profiles" /></div>
 
        </section>
        <section className="about-right">
          <p className="about-para">Hello! Binaya here. I'm a front-end developer from Kathmandu, Nepal, who is passionate and up-and-coming. I have a great connection to the natural splendour of my own country since I'm from the picturesque Taplejung area of Nepal.
          I'm now attending Orchid International College in Gaushala, Kathmandu, where I hope to earn a bachelor's degree in computer science and information technology (CSIT). I've been able to immerse myself in the fields of computer science and web development thanks to my academic path, which has stoked my enthusiasm for building beautiful and user-friendly websites.
          Where my heart really lays is in frontend development. I adore designing intuitive, responsive, and interactive web interfaces to provide great user experiences. In addition to producing designs that are aesthetically pleasing, I also want to make sure they are usable and accessible.
          I believe in the strength of ongoing.</p>
        </section>

      </div>
    </section>
  )
}

export default About