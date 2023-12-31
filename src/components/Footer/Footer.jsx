import React from "react";
import { FaFacebook, FaYoutube, FaSpotify, FaInstagram } from "react-icons/fa";

import './Footer.css'

export default function Footer() {
  return (
    <div className="footer-section">
        <div className="footer-section-inner">
          <h3>Halal Jibika</h3>
          <ul>
            <li><a href="">Plans</a></li>
            <li><a href="">Carrier</a></li>
            <li><a href="">How it works</a></li>
            <li><a href="">Terms & condition</a></li>
            <li><a href="">Future plan</a></li>
          </ul>
        </div>
       <div className="footer-icons">
       <FaFacebook />
        <FaYoutube />
        <FaSpotify />
        <FaInstagram />
       </div>
    </div>
  );
}
