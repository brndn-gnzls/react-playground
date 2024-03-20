import React from 'react'
import { useParams } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export const ProductDetail = () => {
    const params = useParams()
    const [searchParams] = useSearchParams()
    const location = useLocation()
    console.log(location)

    return (
        <>
            <main>
                <div className='component'>Product {params.id} - ProductDetail</div>
                <div className='component'>
                    Search Parameter: ?q={searchParams.get("q")}
                </div>
                <div className='component'>
                    Keyword: keyword={searchParams.get("keyword")}
                </div>
                <div className='component'>
                    Location: &nbsp;&nbsp;&nbsp;&nbsp;pathname: {location.pathname} &nbsp;&nbsp;&nbsp;&nbsp; search: {location.search}
                </div>
            </main>
        </>
    )
}
