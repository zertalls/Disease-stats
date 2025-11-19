import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setErrorMessage } from "@/app/appSlice";

export const baseUrl = createApi({
    reducerPath: 'disease',
    tagTypes: ['Disease'],  
    baseQuery: async (args, api, extraOptions) => {
        const result = await fetchBaseQuery({
            baseUrl: 'https://disease.sh'
        })(args, api, extraOptions)

        console.log('result', result);
        

        if (result.error) {
            if (result.error.status === 'FETCH_ERROR') {
                api.dispatch(setErrorMessage({error: result.error.error}))                
            }
        }
        
        return result
    },  
    endpoints: () => ({})
})

// interface SerializedError {
//   name?: string
//   message?: string
//   stack?: string
//   code?: string
// }

// interface FetchBaseQueryError {
//   status: number | string
//   data?: any
//   error?: string
// }