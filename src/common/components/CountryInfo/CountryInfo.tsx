import { useGetCountryStatsQuery } from "@/features/disease-statistics/api/diseaseApi"
import { CovidCountryDataResponce } from "@/features/disease-statistics/api/diseaseApi.types"
import { useParams } from "react-router"

export const CountryInfo = () => {
  const { data: countryList } = useGetCountryStatsQuery()  
  const { countryName } = useParams()

  
//   const countryInfo: CovidCountryDataResponce = countryList?.filter(country => country.country === countryName) 

//   console.log(countryInfo);
  

  return <div>
    <div>
        {/* <img src={countryInfo.countryInfo.flag}/> */}
    </div>
    <div></div>
  </div>
}

    // {
    //     "updated": 1763667353721,
    //     "country": "Central African Republic",
    //     "countryInfo": {
    //         "_id": 140,
    //         "iso2": "CF",
    //         "iso3": "CAF",
    //         "lat": 7,
    //         "long": 21,
    //         "flag": "https://disease.sh/assets/img/flags/cf.png"
    //     },
    //     "cases": 15440,
    //     "todayCases": 0,
    //     "deaths": 113,
    //     "todayDeaths": 0,
    //     "recovered": 15200,
    //     "todayRecovered": 0,
    //     "active": 127,
    //     "critical": 2,
    //     "casesPerOneMillion": 3078,
    //     "deathsPerOneMillion": 23,
    //     "tests": 81294,
    //     "testsPerOneMillion": 16205,
    //     "population": 5016678,
    //     "continent": "Africa",
    //     "oneCasePerPeople": 325,
    //     "oneDeathPerPeople": 44395,
    //     "oneTestPerPeople": 62,
    //     "activePerOneMillion": 25.32,
    //     "recoveredPerOneMillion": 3029.89,
    //     "criticalPerOneMillion": 0.4
    // },