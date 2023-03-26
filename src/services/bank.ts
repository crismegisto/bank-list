import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Bank } from 'interfaces/bank';

export const bankApi = createApi({
  reducerPath: 'bankApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dev.obtenmas.com/catom/api/challenge/' }),
  endpoints: builder => ({
    getAllBanks: builder.query<Bank[], null>({
      query: () => 'banks'
    })
  })
});

export const { useGetAllBanksQuery } = bankApi;
