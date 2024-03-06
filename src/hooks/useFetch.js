import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            // Start loading
            setLoading(true)
            const response = await fetch(url)
            const result = await response.json()
            // Completed loading after await
            setLoading(false)
            setData(result)
        }
        fetchData()
    }, [url])

    return {data, loading}
}

export default useFetch