import React from 'react'
import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";



function Contact() {
  return (
	<section className='contact' id='contact'>
	<h3><span>Contact</span> us</h3>
	<div className="row">
	<iframe width="50%" 
	height="400" frameborder="0" scrolling="no"
	 marginheight="0" marginwidth="0" 
	 src="https://maps.google.com/maps?width=100%25&amp;
	 height=450&amp;hl=en&amp;q=E-23%20haldhighati%20marg%20pratap%20nagar%
	 20jaipur+(Kitchen)&amp;t=&amp;
	 z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
		</iframe>
	<form>
		<h3>get in touch</h3>
		<div className="input_box">
			<span><FaUser /></span>
			<input type="text"  placeholder="Name"/>
		</div>
		<div className="input_box">
			<span><MdEmail /></span>
			<input type="email"  placeholder="Email"/>
		</div>
		<div className="input_box">
			<span><FaPhoneAlt /></span>
			<input type="number"  id="number" placeholder="Number"
			 pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
		</div>
		<input type="submit" value="Submit"  className='btn'/>
	</form>
	
	</div>
	</section>
  )
}

export default Contact 