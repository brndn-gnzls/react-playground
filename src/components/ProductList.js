// useEffect only runs when mounting or when we
// tell it to.
import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'

const ProductList = () => {
    const [url, setUrl] = useState("http://localhost:9090/products")
    const { data: products } = useFetch(url)

    return (
        <section>
            <div className='btn-con'>
                <button onClick={() => setUrl("http://localhost:9090/products")}>All</button>
                <button onClick={() => setUrl("http://localhost:9090/products?in_stock=true")}>In-Stock Only</button>
            </div>
            {/* products is initially set to null, first run is null, map will not work on null*/}
            {products && products.map((product) => (
                <div className='card' key={product.id}>
                    <p className='id'>{product.id}</p>
                    <p className='name'>{product.name}</p>
                    <p className='info'>
                        <span className='price'>${product.price}</span>
                        <span className={product.in_stock === "true" ? "instock" : "unavailable"}>{product.in_stock === "true" ? "In Stock" : "Unavailable"}</span>
                    </p>
                </div>
            ))}
        </section>
    )
}

export default ProductList