import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
       <div className="footer-info">
         <div><h1>Indisk Restaurant</h1>
         <p>Address : Enghavevej 80c, 2450,</p>
         <p>København Denmark</p>
         <p>Mobile: +45 71 47 14 60</p>
         </div>
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.4868943263987!2d12.601435416220305!3d55.6805222805341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465253256eff6e27%3A0x32fd65f5199adc2e!2sY%2C%20Danneskiold-Sams%C3%B8es%20All%C3%A9%2041%2C%201434%20K%C3%B8benhavn!5e0!3m2!1sda!2sdk!4v1668108929949!5m2!1sda!2sdk" aria-hidden="false"/>
        </div>
<a target="_blank" href="https://www.hackyourfuture.dk/" className="fa fa-facebook"></a>
<a target="_blank" href="https://www.hackyourfuture.dk/" className="fa fa-twitter"></a>
<a target="_blank" href="https://www.hackyourfuture.dk/" className="fa fa-instagram"></a>
<p>Meal sharing App   Copyright@2022</p>
    </footer>
  );
}