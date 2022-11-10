import React from "react";
import "./Home.css";
import homeImage from '../../assets/images/mealhome.jpg'
import aboutImage from '../../assets/images/about-us.jpg'

export default function Home() {
  return (

    <div className="wrapper-home">
      <img className="home-image" src={homeImage} alt='Home Image' />
      <h1>ABOUT US</h1>
      <div className="home-about">
      <div className="about-text">
      <img className="home-image" src={aboutImage} alt='Home Image' />
      </div>
      <div className="about-text"><p>Welcome to Indian Restaurant. Indian Restaurant takes an approach to multi-ethnic cooking
          that celebrates the very best of Indian and local food. The restoration of delicious dishes with extraordinary combinations
          of flavors is a modern and intricate dining experience. A modern, conservative interior design evokes an atmosphere of style and familiarity.
          We prepare the best natural ingredients, the best meat, seafood and fresh vegetables.
          We serve Indian Food with the many different kinds of meat and vegetables
          combined with rich curry sauce consisting of herbs and spices are mouth watering.</p></div>
        
      </div>
    </div>
  );
}