import React from 'react'
import about1 from '../img/about1.jpg'

function About() {
	return (
		<section className='about' id='about'>
			<h1 className='title'><span>About</span>Us</h1>
			<div className="row">
				<div className="img">
					<img src={about1} alt="" />
				</div>
				<div className="content">
					<h3>What Make Our Food Special?</h3>
					<p>We source our ingredients locally
						 whenever possible, ensuring that 
						 they are at the peak of freshness.
						  From crisp vegetables to succulent meats,
						   every component of our dishes is selected
						    with care to guarantee exceptional taste 
							and quality.</p>
							<p>We believe that great food 
								starts with great ingredients.
								 That's why we partner with trusted
								  suppliers who share our commitment
								   to quality. Our ingredients are
								    carefully inspected and chosen for 
									their superior taste,
								 texture, and nutritional value.</p>
								 <a href="#" className='btn'>Learn More</a>
				</div>
			</div>
		</section>
	)
}

export default About