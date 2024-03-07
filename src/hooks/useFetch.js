import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            // Start loading
            setLoading(true)

            try {
                const response = await fetch(url)

                if(!response.ok) {
                    throw new Error(response.statusText)
                }

                const result = await response.json()

                // Completed loading after await
                setData(result)
            } catch (e) {
                setError(e.message)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [url])

    return {data, loading, error}
}

export default useFetch