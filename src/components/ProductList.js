// useEffect only runs when mounting or when we
// tell it to.
import React, { useState, useEffect } from 'react'

const ProductList = () => {

    const [products, setProducts] = useState([])
    const [url, setUrl] = useState("http://localhost:9090/products")

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setProducts(data))

        // [] -- this second argument watches for a changing item.
        // whenever this changes, useEffect runs again.
    }, [url])

    return (
        <section>
            <div className='btn-con'>
                <button onClick={() => setUrl("http://localhost:9090/products")}>All</button>
                <button onClick={() => setUrl("http://localhost:9090/products?in_stock=true")}>In-Stock Only</button>
            </div>
            {products.map((product) => (
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