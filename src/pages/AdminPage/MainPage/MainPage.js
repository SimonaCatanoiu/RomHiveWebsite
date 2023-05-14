import React, { useContext } from 'react'
import "./MainPage.css"
import FeaturedItem from './FeaturedItem'
import Chart from './Chart'
import {AuthContext} from '../../../context/AuthContext.js'

export default function MainPage() {
	const {user} = useContext(AuthContext)

	return (
		<div className='mainPage'>
		  {user && user.role === 'admin' ? (
			<>
			  <FeaturedItem/>
			  <Chart title="Monthly Active Users Analytics" grid/>
			</>
		  ) : (
			<h4>Access denied. You are not authorized to view this page.</h4>
		  )}
		</div>
	  );
}
