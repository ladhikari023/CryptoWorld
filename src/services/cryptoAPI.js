// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com',
//     headers: {
//       'X-RapidAPI-Key': '0fca384bd2mshb4a4aea27aac75ap14af1fjsndd1bd4b4e523',
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
//   };

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "0fca384bd2mshb4a4aea27aac75ap14af1fjsndd1bd4b4e523",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

{
  /* reducerPath : What is this reducer for*/
}

export const cryptoAPI = createApi({
  reducerPath: "cryptoAPI",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (uuid) => createRequest(`/coin/${uuid}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ uuid, timeperiod }) =>
        createRequest(`/coin/${uuid}/history?timeperiod=${timeperiod}`),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoAPI;
