'use client'
import { useEffect, useState } from 'react'
// import axios from 'axios'
import './stockInfo.scss'

export default function StockInfo({ ticker }) {
    const [stock, setStock] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [noDataMessage, setNoDataMessage] = useState('')

    const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

    useEffect(() => {
        if (!ticker) return
        setLoading(true)
        const fetchStocksData = async () => {
            try {
                const res = await fetch(`${BASE_URL}/stocks/${ticker}`) // FastAPI endpoint
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
                const data = await res.json()
                if (!data || Object.keys(data).length === 0) {
                    setNoDataMessage('No data fetched')
                    setStock(null)
                } else {
                    setStock(data)
                    setNoDataMessage('')
                }
            }
            catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchStocksData()
        // axios.get(`http://localhost:8000/stocks/${ticker}`) // Your FastAPI endpoint
        //     .then(res => setStock(res.data))
        //     .catch(err => setError(err.message))
        //     .finally(() => setLoading(false))
    }, [ticker])

    if (loading) return <p className="message">Loading...</p>
    if (error) return <p className="message error">Error: {error}</p>
    if (!stock) return <p className="message">No data found</p>
    if (noDataMessage) return <p className="message warning">{noDataMessage}</p>

    return (
        <main className="stock-details__container">
            <h1  className="title">{stock.shortName} ({ticker})</h1>
            {noDataMessage}
            <p><strong>Price:</strong> ${stock.price}</p>
            <p><strong>Change:</strong> {stock.change}</p>
            <p><strong>Volume:</strong> {stock.volume}</p>
        </main>
    )
}
