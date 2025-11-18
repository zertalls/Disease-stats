import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseUrl = createApi({
    reducerPath: 'disease',
    tagTypes: ['Disease'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://disease.sh'
    }),
    endpoints: () => ({})
})