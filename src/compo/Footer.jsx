import React from 'react'
import { FaFacebookF , FaInstagram , FaTwitter , FaGoogle } from "react-icons/fa";

function Footer() {
  return (
	<section className='footer'> 
	<div className="social">
  <a href="#"><FaFacebookF /></a>
  <a href="#"><FaInstagram /></a>
  <a href="#"><FaTwitter /></a>
  <a href="#"><FaGoogle /></a>
	</div>
	<div className="links">
	<a href="#home">Home</a>
	<a href="#about">About</a>
	<a href="#menu">Menu</a>
	<a href="#reviwe">Reviwe</a>
	<a href="#contact">Contact</a>
	</div>
	<h4>All Rights Reserved  © kitchen 2024 </h4>
	</section>
  )
}

export default Footer