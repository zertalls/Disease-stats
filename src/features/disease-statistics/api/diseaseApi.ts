import { baseUrl } from "@/app/baseUrl";
import { CovidCountryDataResponce } from "./diseaseApi.types";

export const diseaseApi = baseUrl.injectEndpoints({
    endpoints: (build) => ({
        getCountryStats: build.query<CovidCountryDataResponce[], void>({
            query: () => {
                return {
                    method: 'get',
                    url: '/v3/covid-19/countries'
                }
            }
        })
    })
})

export const {useGetCountryStatsQuery } = diseaseApi