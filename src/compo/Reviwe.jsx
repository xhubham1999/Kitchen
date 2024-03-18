import React from 'react'
import quortimg from '../img/quoteimg.png'
import { reviwe } from '../data'

function Reviwe() {
  return (
	<section className='reviwe' id='reviwe'>
		<div className="heading">
			<h3>Customer's <span>Review</span></h3>
			</div>
			<div className="box-content">
			{
				reviwe.map((item, index) => (
					<div className="box">
					<img src={quortimg} alt="" />
					<p>“{item.comment},,</p>
					<img src={item.imgr} alt="img" />
					<h3>-{item.userName}</h3>
					<p>Rating-{item.rating}</p>
					</div>
				))}
		</div>
	</section>
  )
}

export default Reviwe