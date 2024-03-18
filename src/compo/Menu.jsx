import React from 'react'
import {proMenu} from '../data'

function Menu() {
  return (
	<section className='menu' id='menu'>
		<h1 className="heading">Our<span>Menu</span></h1>
		<div className="box-contener">
     {
		proMenu.map((item,index)=>(
			<div className="box">
				<img src={item.img} alt="item" />
				<h2>{item.type}</h2>
				<a href="#" className='btn'>See Menu</a>
			</div>
		))
	 }
		</div>
	</section>
  )
}

export default Menu