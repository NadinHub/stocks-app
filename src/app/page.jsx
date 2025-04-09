'use client'
import Link from 'next/link'
import './page.scss'
import { useState } from 'react'
import StockInfo from '@/components/stockInfo/StockInfo'
const tickers = ['AAPL', 'GOOG', 'TSLA', 'AMZN', 'MSFT']

export default function HomePage() {

  // const should404 = true
  // if (should404) notFound() // This will trigger `not-found.jsx`
  const [isOpen, setIsOpen] = useState(false)
  const [chosenStock, setChosenStock] = useState(null)

  const handleClick = (ticker) => {
    setChosenStock(ticker)
    setIsOpen(true)
  }
  return (

    <main className="page__container">
      <h1 className="title">Stock List</h1>
      <ul className="stock-list">
        {tickers.map((ticker) => (
          <li key={ticker} className="stock-item">
            {/* <Link href={`/stocks/${ticker}`}>{ticker}</Link> */}
            <div className='stock__link' onClick={() => handleClick(ticker)}>{ticker}</div>
          </li>

        ))}
        {/* <button onClick={() => setIsOpen((prev) => !prev)}>Menu</button> */}
      </ul>

      {isOpen &&
        <div className='stock__details'>
          <StockInfo ticker={chosenStock} />
        </div>}
    </main>
  )
}