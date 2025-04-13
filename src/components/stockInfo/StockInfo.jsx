'use client'

import './stockInfo.scss'

export default function StockInfo({ stock }) {

    return (
        <main data-testid="stock-details" className="stockinfo__container">
            <div className='stockinfo__title'>
                {stock?.logo && (
                    <div className="stockinfo-logo__wrapper">
                        <img src={stock.logo} alt={`${stock?.name || 'Stock'} logo`} />
                    </div>
                )}
                <div className='stockinfo__shortname'>
                    <h1 className="stockinfo__h1">{stock.shortName}</h1>
                    <div>({stock.ticker})</div>
                </div>
            </div>
            <div className='stockinfo__details'>
                <p><span>Price:</span> ${stock.price}</p>
                <p><span>Change:</span> {stock.change}</p>
                <p><span>Volume:</span> {stock.volume}</p>
            </div>
        </main>
    )
}
