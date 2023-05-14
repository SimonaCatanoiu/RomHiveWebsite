import React,{useState,useEffect} from 'react'
import "./Chart.css"
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { Tooltip } from 'react-bootstrap';
import {BASE_URL} from '../../../utils/config.js'

export default function Chart({title,grid}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${BASE_URL}/statistics/logs`,{ credentials: "include"});
        const data = await res.json();
        setData(data);
        console.log(data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (

    <div className='chart'>
      <div style={{ position: 'relative',width:'98%',height: '100%'}}>

        <h3 className='chartTitle'>{title}</h3>
        <ResponsiveContainer width="100%" aspect={4/1}>
          <LineChart data={data}>
            <XAxis dataKey="month" stroke="#d2386c"/>
            <YAxis/>
            <Line type="monotone" dataKey="userno" stroke="#d2386c"/>
            <Tooltip/>
            {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>

  )
}
