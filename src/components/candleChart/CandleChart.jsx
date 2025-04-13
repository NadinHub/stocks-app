'use client'

import { CandlestickSeries, createChart } from 'lightweight-charts';
import { useEffect, useRef } from 'react'
import './candleChart.scss'

export default function CandleChart({ data }) {

    const chartContainerRef = useRef(null)

    const chartOptions = { layout: { textColor: 'black', background: { type: 'solid', color: 'white' } } };

    useEffect(() => {

        if (!data?.length) return

        const container = chartContainerRef.current;
        const chart = createChart(container, chartOptions);

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
        return () => {
            chart.remove();
        }

    }, [data])

    return (
        <>
            <div ref={chartContainerRef} className="candle-chart__wrapper">
            </div>

        </>
    )
}
