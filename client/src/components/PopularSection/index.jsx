import React, { useEffect, useState } from 'react'
import "./index.scss"
import axios from 'axios'
import Product from '../Product'

const PopularSection = () => {

    const [data, setdata] = useState([])
    const fetchData = async () => {
        const res = await axios.get("http://localhost:7000/")
        setdata(res.data);
        console.log(res.data);
    }

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <section id='popular'>
            <div className="up">
                <h2>Popular Items</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus molestiae incidunt recusandae aliquid voluptas iste itaque dolor.</p>
            </div>
            <div className="products">
                {data && data.map(item => (

                    <div key={item._id}>
                        <div className="imgBox">
                            <img src={item.image} alt="" />
                        </div>
                        <h2>{item.title}</h2>
                        <span>${item.price}</span>
                    </div>
                ))}
            </div>
            <div className="down">
                <button>VIEW MORE PRODUCTS</button>
            </div>
        </section>
    )
}

export default PopularSection