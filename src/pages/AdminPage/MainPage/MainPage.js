import React from 'react'
import "./MainPage.css"
import FeaturedItem from './FeaturedItem'
import Chart from './Chart'
import {data} from "./ChartData"

export default function MainPage() {
	return (
		<div className='mainPage'>
			<FeaturedItem/>
			<Chart data={data} title="User Analytics" grid dataKey="Active User"/>
		</div>
	)
}
