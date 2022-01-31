import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoExchangesHeaders={
    'x-rapidapi-host': 'coingecko.p.rapidapi.com',
    'x-rapidapi-key': '6d8a0640a6msh6e404dee8081791p117570jsn3a75cab7c683'
}

const cryptoExchangeUrl=`https://coingecko.p.rapidapi.com/`

const createRequest=(url) => ({url, headers: cryptoExchangesHeaders})

export const cryptoExchangesApi=createApi({
    reducerPath: 'cryptoExchanges',
    baseQuery: fetchBaseQuery({baseUrl: cryptoExchangeUrl}),
    endpoints:(builder) => ({
        getCryptoExchanges: builder.query({
            query: () => createRequest("exchanges/")
        })
    })
})

export const{
    useGetCryptoExchangesQuery
}=cryptoExchangesApi