import React from 'react'
import"./index.scss"

const ArrivalsSection = () => {
  return (
    <section id='Arrivals'>
       <h2>New Arrivals</h2>
       <div className="cards">
        <div className="green">
            <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product1.png" alt="" />
            <h3>Thermo Ball Etip Gloves</h3>
            <p>$ 45,743</p>
        </div>
        <div className="gray">
            <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product2.png" alt="" />
            <h3>Thermo Ball Etip Gloves</h3>
            <p>$ 45,743</p>
        </div>
        <div className="gold">
            <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product3.png" alt="" />
            <h3>Thermo Ball Etip Gloves</h3>
            <p>$ 45,743</p>
        </div>
       </div>
    </section>
  )
}

export default ArrivalsSection