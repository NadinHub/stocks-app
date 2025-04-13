'use client'
import { useEffect, useState } from 'react'
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

    }, [ticker])

    if (loading) return <p className="message">Loading...</p>
    if (error) return <p className="message error">Error: {error}</p>
    if (!stock) return <p className="message">No data found</p>
    if (noDataMessage) return <p className="message warning">{noDataMessage}</p>

    return (
        <main className="stockinfo__container">
            <div className='stockinfo__title'>
                {stock?.logo && (
                    <div className="stockinfo-logo__wrapper">
                        <img src={stock.logo} alt={`${stock?.name || 'Stock'} logo`} />
                    </div>
                )}
                <div className='stockinfo__shortname'><h1 className="stockinfo__h1">{stock.shortName}</h1> <div>({ticker})</div></div>
            </div>
            {noDataMessage}
            <div className='stockinfo__details'>
                <p><span>Price:</span> ${stock.price}</p>
                <p><span>Change:</span> {stock.change}</p>
                <p><span>Volume:</span> {stock.volume}</p>
            </div>
        </main>
    )
}
