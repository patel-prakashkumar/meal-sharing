import React from "react";
import "./AboutUs.css";
import images from '../../assets/images/aboutus.png'



export default function About() {
  return (
    <div className="about">
      
      <div className="about-content">
      <h1>ABOUT US</h1>
        <p>
        Welcome to Hind Indian Restaurant. 
        Hind Indian Restaurant takes an approach to multi-ethnic cooking that celebrates the very best of Indian and local food. 
        The restoration of delicious dishes with extraordinary combinations of flavors is a modern and intricate dining experience. 
        A modern, conservative interior design evokes an atmosphere of style and familiarity. We prepare the best natural ingredients, the best meat, 
        seafood and fresh vegetables. We serve Hind Indian Food with the many different kinds of meat and vegetables combined with rich curry sauce 
        consisting of herbs and spices are mouth watering.
        </p>
        <p>
        Our goal is to provide a pleasant atmosphere with the best tasting Indian food ever, 
        a significant focus on sodas, wines, special cocktails and great service to compliment 
        it all ... thus a complete experience. Wait ... want to enjoy our food at home do not worry, we deliver homemade, 
        take the road with JUST-EAT, Hungary and WALT food providers. You can also call us at our number for ordering.
        </p>
      </div>
      <div><img src={images} alt='aboutus images' /></div>
    </div>
  );
}
