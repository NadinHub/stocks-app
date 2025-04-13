'use client'
import './page.scss'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
const tickers = ['AAPL', 'GOOG', 'TSLA', 'AMZN', 'MSFT', 'V', 'NVDA', 'XOM']
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

export default function HomePage() {

  const router = useRouter()
  const [chosenStock, setChosenStock] = useState(null)

  const [stocks, setStocks] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchAllStocks = async () => {
      setLoading(true)
      try {
        const fetchedData = {}

        for (const ticker of tickers) {
          const response = await fetch(`${BASE_URL}/stocks/${ticker}`)
          if (!response.ok) throw new Error(`Failed to fetch ${ticker}`)

          const data = await response.json()
          fetchedData[ticker] = data
        }

        setStocks(fetchedData)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchAllStocks()
  }, [])


  const handleClick = (ticker) => {
    setChosenStock(ticker)
    // Navigate to dynamic route /stock/[ticker]
    router.push(`/stock/${ticker}`)
  }

  const Card = ({ ticker }) => {
    const stock = stocks?.[ticker]

    if (!stock) {
      return (
        <div className="stock__item">
          <p className="stock__ticker">{ticker}</p>
          <p>Loading...</p>
        </div>
      )
    }

    return (
      <div
        data-testid={`stock-link-${ticker}`}
        className="stock__item"
        onClick={() => handleClick(ticker)}
      >
        <p className="stock__name">{stock.shortName}</p>
        <p className="stock__ticker">{ticker}</p>
        <p className="stock__price"><span>Price:</span> ${stock.price}</p>
      </div>
    )
  }


  return (
    <main className="page__container">
      <div>
        <div className="stock-list">
          {tickers.map((ticker) => (
            <Card key={ticker} ticker={ticker} />
          ))}
        </div>
      </div>
    </main>
  )
}