import React from 'react'

const Shoes = () => {

  const shoesData = [
   { id:1, name:'Guci', price: 1200, description: 'Luxury Look', image: '/img01.webp'},
   { id:2, name:'Guci', price: 1100, description: 'Decent Look', image: '/img02.webp'},
   { id:3, name:'Guci', price: 1300, description: 'Beautiful Look', image: '/img03.webp'},
   { id:4, name:'Guci', price: 1500, description: 'Extra Look', image: '/img04.webp'},
   { id:5, name:'Guci', price: 850,  description: 'BlackishGold Look', image: '/guci05 set.webp'},
   { id:6, name:'Guci', price: 600,  description: 'Smart Look', image: '/guci06.webp'},
  ]

  return (
    <div>
      <div className="shoes">
        {shoesData.map((shoe) => (
         <div key={shoe.id} className='shoes-card'> 
          <img src={shoe.image} alt={shoe.name} />
          <h3>{shoe.name}</h3>
          <p>{shoe.description}</p>
          <div className='price'>${shoe.price}</div>
          <button>Add To Cart</button>
          </div>
        
        ))}
      </div>
    </div>
  )
}

export default Shoes