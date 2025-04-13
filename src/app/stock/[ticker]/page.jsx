'use client'
import { useEffect, useState } from 'react'
import './page.scss'
import { useParams } from 'next/navigation'
import StockInfo from '@/components/stockInfo/StockInfo'
// import StockChart from '@/components/stockChart/StockChart'
import CandleChart from '@/components/candleChart/CandleChart'

export default function StockPage() {
    const [stock, setStock] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [noDataMessage, setNoDataMessage] = useState('')

    const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'
    const params = useParams()
    const ticker = params.ticker

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
        <main className='stock-page__wrapper' data-testid="stock-details">
            <StockInfo stock={stock} />
            <div className='stock-details__candle'>
                <CandleChart data={stock.history} />
            </div>
        </main>
    )
}
