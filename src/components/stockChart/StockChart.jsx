'use client'

import { createChart } from 'lightweight-charts'
import { useEffect, useRef } from 'react'

export default function StockChart({ data }) {
  const chartContainerRef = useRef()

  
  
  useEffect(() => {

    if (!data?.length) return
    
    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 400,
      layout: {
        background: { color: '#ffffff' },
        textColor: '#000',
      },
      grid: {
        vertLines: { color: '#eee' },
        horzLines: { color: '#eee' },
      },
      priceScale: {
        borderColor: '#ccc',
      },
      timeScale: {
        borderColor: '#ccc',
      },
    })
    
    const candleSeries = chart.addCandlestickSeries({
      upColor: '#26a69a',
      downColor: '#ef5350',
      borderUpColor: '#26a69a',
      borderDownColor: '#ef5350',
      wickUpColor: '#26a69a',
      wickDownColor: '#ef5350',
    })

    // Format data to fit chart
    const formattedData = data.map((d) => ({
      time: d.date,
      open: d.open,
      high: d.high,
      low: d.low,
      close: d.close,
    }))

    candleSeries.setData(formattedData)

    const observer = new ResizeObserver(() => {
      chart.applyOptions({
        width: chartContainerRef.current.clientWidth,
      })
    })
    observer.observe(chartContainerRef.current)

    return () => {
      observer.disconnect()
      chart.remove()
    }
  }, [data])

  return <div ref={chartContainerRef} style={{ width: '100%', height: '400px' }} />
}
