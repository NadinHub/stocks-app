'use client'

import { useEffect, useRef } from 'react'
import { createChart } from 'lightweight-charts'

export default function TestChart() {
  const ref = useRef()

  useEffect(() => {
    const chart = createChart(ref.current, {
      width: 600,
      height: 300,
      layout: {
        background: { color: '#fff' },
        textColor: '#000',
      },
    })

    const candleSeries = chart.addCandlestickSeries()
    candleSeries.setData([
      { time: '2025-04-07', open: 100, high: 110, low: 90, close: 105 },
      { time: '2025-04-08', open: 105, high: 120, low: 100, close: 115 },
    ])
  }, [])

  return <div ref={ref} style={{ width: '100%', height: '400px' }} />
}
