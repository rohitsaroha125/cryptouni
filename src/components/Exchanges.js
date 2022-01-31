import React,{useState} from 'react'
import millify from 'millify'
import { Collapse, Row, Col, Typography, Avatar, Table } from 'antd'
import HTMLReactParser from 'html-react-parser'

import { useGetCryptoExchangesQuery } from '../services/cryptoExchangesApi'

const {Panel}=Collapse
const {Text}=Typography

export const Exchanges=() => {

    const {data, isFetching}=useGetCryptoExchangesQuery()
    const [exchangeData,setExchangeData]=useState([])
    
    const colData=[
        {
            title:'',
            dataIndex:'image',
            render:(image) => <img src={image} style={{height:"30px",margin:"0px",padding:"0px",borderRadius:"50%",width:"30px",objectFit:"cover"}}></img>
        },
        {
        title: 'Exchange',
        dataIndex: 'name',
        render:(name) => <strong>{name}</strong>
    },{
        title: '24h Trade Volume',
        dataIndex: 'trade_volume_24h_btc',
        render: (volume) => millify(volume)
    },{
        title: 'Url',
        dataIndex: 'url',
        render:(url) => <a href={url} target="_blank">{url}</a>
    },{
        title: 'Year Established',
        dataIndex: 'year_established',
    }]

    console.log("exchanges are ",data)

    if(isFetching) return 'Loading...'

    return(<>
        <Table columns={colData} dataSource={data}>
        </Table>
    </>)
}