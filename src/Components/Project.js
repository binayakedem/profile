import './style.css'
import React from 'react'
import Wordpress from '../assets/first.jpg'
import Second from '../assets/second.jpg'
import Third from '../assets/third.jpg'
import Fourth from '../assets/fourth.jpg'
const Project = () => {
  return (
    <section id="project">
      <div className="project-titles">
        <h2 className='project-title'>Projects</h2>
      </div>
      <div className="project-boxes">
        <div className="project-box">
          <img className="card-img"src={Wordpress} alt="wordpress-images" />
          <div className="overlay">
           <div className="card-title"><h1 >Wordpress</h1></div>
           <div  className="card-para"><p>This project is created using wordpress and related to online class system </p></div>
            <div className='card-link'> <a target='_blank' rel="noopener noreferrer" href="https://binayalimbu.com.np">More..</a></div>
          </div>
        </div>
        {/* second box */}
        <div className="project-box">
          <img className="card-img"src={Second} alt="wordpress-images" />
          <div className="overlay">
           <div className="card-title"><h1 >News site</h1></div>
           <div  className="card-para"><p>This project is created using react js, firebase with news API to display news sites around the world .</p></div>
            <div className='card-link'> <a target='_blank' rel="noopener noreferrer" href="https://github.com/binayakedem/world-news.github.io">More..</a></div>
          </div>
        </div>
        {/* third box */}
        <div className="project-box">
          <img className="card-img"src={Third} alt="wordpress-images" />
          <div className="overlay">
           <div className="card-title"><h1 >Preorder</h1></div>
           <div  className="card-para"><p>This project is devloped using react js and firebase to increase efficiency and improve in wastage of food in hotel by ordering food as require by customer.  </p></div>
            <div className='card-link'> <a target='_blank' rel="noopener noreferrer" href="https://github.com/binayakedem/preorder">More..</a></div>
          </div>
        </div>
        {/* fourth box */}
        <div className="project-box">
          <img className="card-img"src={Fourth} alt="wordpress-images" />
          <div className="overlay">
           <div className="card-title"><h1 >Visit Portfolio</h1></div>
           <div  className="card-para"><p>You can directly visit my github account where more than 10 projects are I created.</p></div>
            <div className='card-link'> <a target='_blank' rel="noopener noreferrer" href="https://github.com/binayakedem">More..</a></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project