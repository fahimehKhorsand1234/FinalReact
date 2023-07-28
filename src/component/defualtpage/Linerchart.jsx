import React from 'react';
import {ComposedChart,Area, Line, CartesianGrid, XAxis, YAxis, Tooltip,Legend, Bar } from 'recharts';


const data = [
    {
      "name": "",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    }
]

export default function Linerchart() {

  return (
    <>
        <ComposedChart width={500} height={250} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#f5f5f5" />
                <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        </ComposedChart>
    </>
  )
}
