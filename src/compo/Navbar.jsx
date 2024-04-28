import React,{ useRef }  from 'react'
import logo from '../img/logo.png'
import { FaSearch ,FaShoppingCart ,FaBars , FaUser ,FaLock } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import{Cart} from '../data'

function Navbar() {

	
	const searchref = useRef();
	const searchshow = () =>{
		searchref.current.classList.toggle("active");
		atcref.current.classList.remove('active');
		navref.current.classList.remove('active');
		userref.current.classList.remove('active');
	};
	const atcref= useRef();
	const atcshow =()=>{
		atcref.current.classList.toggle('active');
		searchref.current.classList.remove("active");
		navref.current.classList.remove('active');
		userref.current.classList.remove('active');
	};
	const navref= useRef();
	const navshow =()=>{
		navref.current.classList.toggle('active');
		atcref.current.classList.remove('active');
		searchref.current.classList.remove("active");
		userref.current.classList.remove('active');
	};
 const userref = useRef();
 const usershow=()=>{
	userref.current.classList.toggle('active');
	atcref.current.classList.remove('active');
	navref.current.classList.remove('active');
	searchref.current.classList.remove("active");

 }
  return (
	<>
	<header className='header' >
 <a href="#" className='logo'><img src={logo} alt="logo" /></a>
<nav className='nav' ref={navref}>
	<a href="#home">Home</a>
	<a href="#about">About</a>
	<a href="#menu">Menu</a>
	<a href="#reviwe">Reviwe</a>
	<a href="#contact">Contact</a>
	
</nav>
<div className="icons">
	<div className='ic' onClick={usershow}><FaUser /></div>
	<div className='ic' onClick={searchshow}><FaSearch /></div>
	<div className='ic' onClick={atcshow}><FaShoppingCart /></div>
	<div className='ic' id='menu-btn' onClick={navshow}><FaBars /></div>
</div>
<div className="login" ref={userref}>
	<form action="#" className='login-form'>
		<h3>login</h3>
		
		<div className="input-box">
		<span><FaUser /></span>
			<input type="text"  placeholder="Name"/>
		</div>
		<div className="input-box">
		<span><FaLock /></span>
			<input type="password"  placeholder="password"/>
		</div>
			<p><a href="#">forgot password? </a></p>
		<input type="submit" value="Submit"  className='btn'/>
		<span className='singup'>Not a Member? <a href="#">Sign Up</a></span>

	</form>
</div>
<div className="searchform" ref={searchref}>
	<input type="sreach" placeholder='Search...' id='search-box' />
	<label htmlFor='search-box'><FaSearch /></label>
</div>
<div className="cart-contener" ref={atcref}>
{
	Cart.map((item,index)=>(
		<div className='cart-item' key={index}>
			<div className='remove'><FaDeleteLeft /> </div>
			<img src={item.img} alt="item img" />
			<div className="content">
				<h3>{item.name}</h3>
				<div className="price">₹{item.price}/-</div>
	             <div className="count">
					<button > - </button> 
					<button > + </button>
				 </div>
			</div>
			</div>

	))
}
<a href="#" className='btn'>Checkout Now</a>
</div>
	</header>
	</>
  )
}

export default Navbar