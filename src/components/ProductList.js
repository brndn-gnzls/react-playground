// useEffect only runs when mounting or when we
// tell it to.
import React, { useState, useEffect, useCallback } from 'react'

const ProductList = () => {

    const [products, setProducts] = useState([])
    const [url, setUrl] = useState("http://localhost:9090/products")

    // This is a function for which we are dependent; therefore,
    // we utilize `useCallack`. This returns a memoized function,
    // keeping the function the same -- this is why the dependency
    // is added.
    const getProducts = useCallback(async () => {
        const response = await fetch(url)
        const data = await response.json()
        setProducts(data)
    }, [url]) // dependency since function return is cached.

    // useEffect for side-effects, such as fetching data.
    useEffect(() => {
        getProducts() // Function to get data.
        // [] -- this second argument watches for a changing item.
        // whenever this changes, useEffect runs again.
    }, [getProducts]) // Same function as our dependency.

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