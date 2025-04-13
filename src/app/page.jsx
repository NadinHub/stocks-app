'use client'
import './page.scss'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import StockInfo from '@/components/stockInfo/StockInfo'
const tickers = ['AAPL', 'GOOG', 'TSLA', 'AMZN', 'MSFT']

export default function HomePage() {

  const router = useRouter()
  const [chosenStock, setChosenStock] = useState(null)

  const handleClick = (ticker) => {
    setChosenStock(ticker)
    // Navigate to dynamic route /stock/[ticker]
    router.push(`/stock/${ticker}`)
  }
  return (

    <main className="page__container">
      <div>
        <ul className="stock-list">
          {tickers.map((ticker) => (
            <li key={ticker} className="stock-item">
              <div  
              data-testid={`stock-link-${ticker}`} 
              className='stock__link' 
              onClick={() => handleClick(ticker)}
              >
                {ticker}
              </div>
            </li>

          ))}
        </ul>
      </div>
      {/* {isOpen &&
        <div data-testid="stock-details" className='stock__details'> */}
          {/* <StockInfo ticker={chosenStock} /> */}
        {/* </div> */}
      {/* } */}
    </main>
  )
}