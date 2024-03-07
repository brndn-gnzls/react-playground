// useEffect only runs when mounting or when we
// tell it to.
import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'
import Loading from '../assets/loading.gif'

const ProductList = () => {
    const [url, setUrl] = useState("http://localhost:9090/products")

    const tObj = {
        "message": "[!] Message from <ProductList/>",
        "item": "[+]"
    }

    const { data: products, loading, error, body } = useFetch(url, tObj)

    return (
        <section>
            <div className='btn-con'>
                <button onClick={() => setUrl("http://localhost:9090/products")}>All</button>
                <button onClick={() => setUrl("http://localhost:9090/products?in_stock=true")}>In-Stock Only</button>
            </div>
            {loading && <p className='loading'><img src={Loading} width={50} height={50} alt="" /></p>}
            {error && <p className='error'> {error} </p>}

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