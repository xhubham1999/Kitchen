import burger from './img/burger.webp'
import french from './img/freanch fry.jpg'
import coffee from './img/cold coffee.jpeg'
import noodles from './img/nudels.avif'
import burger_menu from './img/burger-menu.png'
import pizza_menu from './img/pizza-menu.png'
import coffee_menu from './img/coldcoffee-menu.png'
import pasta_menu from './img/pasta-menu.png'
import noodles_menu from './img/noodels-menu.png'
import mojito_menu from './img/mojito-menu.png'
import momos_menu from './img/momo-menu.png'
import rolls_menu from './img/roll-menu.png'
import rw1 from './img/rw1.png'
import rw2 from './img/rw2.png'
import rw3 from './img/rw3.png'


const Cart= [
	{
		id:1,
		name:'Burger',
		price: '99',
        img: burger,
},
	{
		id:2,
		name:'French Fries ',
		price: '129',
        img: french,
},
	{
		id:3,
		name:'Cold Coffee',
		price: '79',
        img: coffee,
},
	{
		id:4,
		name:'Noodles',
		price: '149',
        img:  noodles,
}
	
]
const proMenu =[{
	type:'Burgers',
    img :burger_menu
},{
	type:'Pizza',
    img :pizza_menu
},{
	type:'Cold-Coffee',
    img :coffee_menu
},{
	type:'Pasta',
    img :pasta_menu
},{
	type:'Noodels',
    img :noodles_menu
},{
	type:'Mojito',
    img :mojito_menu
},
{
	type:'Momos',
    img :momos_menu
},
{
	type:'Rolls',
    img :rolls_menu
},

]

const reviwe =[
	{
		userName:"John Doe",
		rating:5,
		comment:`This burger was amazing! I love the taste of it. The cheese is so melted and the patty is juicy.`,
		imgr: rw1
	},
	{
		userName:"lina smith",
		rating:4.5,
		comment:`I recently tried the pizza and I must say,
		 it was absolutely fantastic! The crust was perfectly crispy on the outside yet 
		wonderfully chewy on the inside, and the toppings were fresh and flavorful.`,
		imgr: rw2
	},
	{
		userName:"roni jemes",
		rating:5,
		comment:`My recent dining experience was nothing short of extraordinary. From the moment I stepped through the doors, I was greeted with warmth
		 and elegance, setting the tone for what would be an unforgettable evening.`,
		imgr: rw3
	}
]
export{Cart, proMenu , reviwe };