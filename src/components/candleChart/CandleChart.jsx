'use client'

import { CandlestickSeries, createChart } from 'lightweight-charts';
import { useEffect, useRef } from 'react'

export default function CandleChart({ data }) {

    const chartContainerRef = useRef(null)

    useEffect(() => {

        if (!data?.length) return

        const chart = createChart(chartContainerRef.current, { width: 600, height: 300 })

        const candlestickSeries = chart.addSeries(CandlestickSeries, {
            upColor: '#26a69a', 
            downColor: '#ef5350', 
            borderVisible: false,
            wickUpColor: '#26a69a', 
            wickDownColor: '#ef5350',
        });
        candlestickSeries.setData(data);

        chart.timeScale().fitContent();

        // 🧹 Clean up chart on unmount
        return () => chart.remove();

    }, [data])

    return (
        <>
            <div
                ref={chartContainerRef}
                style={{ width: '100%', height: '400px' }}
            >
            </div>

        </>
    )
}
