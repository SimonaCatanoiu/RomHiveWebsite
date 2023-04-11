import React from 'react'
import "./FeaturedItem.css"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function FeaturedItem() {
  return (
    <div className='featured'>
      <div className='featuredItem'>
        <span className='featuredTitle'>Revenue</span>
          <div className='featuredMoneyContainer'>
            <span className='featuredMoney'>$2415</span>
            <span className='featuredMoneyRate'>-11.4 <ArrowDownwardIcon/></span>
          </div>
          <span className='featuredSub'>Compared to last month</span>
      </div>

      <div className='featuredItem'>
        <span className='featuredTitle'>Sales</span>
          <div className='featuredMoneyContainer'>
            <span className='featuredMoney'>$4415</span>
            <span className='featuredMoneyRate'>-2.4 <ArrowDownwardIcon/></span>
          </div>
          <span className='featuredSub'>Compared to last month</span>
      </div>

      <div className='featuredItem'>
        <span className='featuredTitle'>Cost</span>
          <div className='featuredMoneyContainer'>
            <span className='featuredMoney'>$2225</span>
            <span className='featuredMoneyRate'>2.4 <ArrowUpwardIcon/></span>
          </div>
          <span className='featuredSub'>Compared to last month</span>
      </div>


    </div>
  )
}
