import React from 'react'

const HomeContent = () => {
  return (
    <div>
        <section className='hero' style={{backgroundImage: "url(bgpic.webp)"}}>
            <div>
                <h1 className='fade-in'>Welcome To Shoes World</h1>
                <p>Your one-stop shop for the best shoes</p>
                <button>Shop Now</button>
            </div>
        </section>
    </div>
  )
}

export default HomeContent