import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Contact, ContactEu, ContactOther, ContactUs, ContactIn, PageNotFound, Admin, ProductList, ProductDetail, Home } from "../pages/index";

export const AllRoutes = () => {
    const user = false
    
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="products" element={<ProductList />}></Route>
                <Route path="products/:id" element={<ProductDetail />}></Route>

                {/* Nested Routes */}
                <Route path="contact" element={<Contact />}>
                    <Route path="in" element={<ContactIn />}></Route>
                    <Route path="eu" element={<ContactEu />}></Route>
                    <Route path="us" element={<ContactUs />}></Route>
                    <Route path="*" element={<ContactOther />}></Route>
                </Route>

                <Route path="admin" element={user ? <Admin /> : <PageNotFound />}></Route>

                {/* Catches all routes */}
                <Route path="*" element={<PageNotFound title="404" />} />
            </Routes>
        </>
    )
}
