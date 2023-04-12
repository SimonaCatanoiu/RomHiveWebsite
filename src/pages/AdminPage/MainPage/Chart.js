import React from 'react'
import "./Chart.css"
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { Tooltip } from 'react-bootstrap';

export default function Chart({title,data,dataKey,grid}) {
  
  return (

    <div className='chart'>
      <div style={{ position: 'relative',width:'98%',height: '100%'}}>

        <h3 className='chartTitle'>{title}</h3>
        <ResponsiveContainer width="100%" aspect={4/1}>
          <LineChart data={data}>
            <XAxis dataKey="month" stroke="#5550bd"/>
            <YAxis/>
            <Line type="monotone" dataKey={dataKey} stroke="#5550bd"/>
            <Tooltip/>
            {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>}
          </LineChart>
        </ResponsiveContainer>

      </div>
    </div>

  )
}
