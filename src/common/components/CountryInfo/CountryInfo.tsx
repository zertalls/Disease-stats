import { useGetCountryStatsQuery } from "@/features/disease-statistics/api/diseaseApi";
import { CovidCountryDataResponce } from "@/features/disease-statistics/api/diseaseApi.types";
import { useParams } from "react-router";
import styles from "./CountryInfo.module.css";

export const CountryInfo = () => {
  const { data: countryList } = useGetCountryStatsQuery();
  const { countryName } = useParams();

  const countryInfo: CovidCountryDataResponce = countryList?.find(country => country.country === countryName);

  return (
    <div className={styles.conatiner}>
      <div className={styles.mainInfo}>
        <img className={styles.img} src={countryInfo.countryInfo.flag} />
        <h2>{`Country: ${countryInfo.country}`}</h2>
        <span>{`Continent: ${countryInfo.continent}`}</span>
        <span>{`Population: ${countryInfo.population}`}</span>
        <span>{`ISO-2: ${countryInfo.countryInfo.iso2}`}</span>
        <span>{`ISO-3: ${countryInfo.countryInfo.iso3}`}</span>
        <span>{`Latitude: ${countryInfo.countryInfo.lat}`}</span>
        <span>{`Longitude: ${countryInfo.countryInfo.long}`}</span>
      </div>
      <div className={styles.secondaryInfo}>
        <span>{`Cases: ${countryInfo.cases}`}</span>
        <span>{`Today cases: ${countryInfo.todayCases}`}</span>
        <span>{`Deaths: ${countryInfo.deaths}`}</span>
        <span>{`Today deaths: ${countryInfo.todayDeaths}`}</span>
        <span>{`Recovered: ${countryInfo.recovered}`}</span>
        <span>{`Today recovered: ${countryInfo.todayRecovered}`}</span>
        <span>{`Active: ${countryInfo.active}`}</span>
        <span>{`Critical: ${countryInfo.critical}`}</span>
        <span>{`Cases per one million: ${countryInfo.casesPerOneMillion}`}</span>
        <span>{`Deaths per one million: ${countryInfo.deathsPerOneMillion}`}</span>
        <span>{`Tests: ${countryInfo.tests}`}</span>
        <span>{`Tests per one million: ${countryInfo.testsPerOneMillion}`}</span>
        <span>{`One case per people: ${countryInfo.oneCasePerPeople}`}</span>
        <span>{`One death per people: ${countryInfo.oneDeathPerPeople}`}</span>
        <span>{`One test per people: ${countryInfo.oneTestPerPeople}`}</span>
        <span>{`Active per one million: ${countryInfo.activePerOneMillion}`}</span>
        <span>{`Recovered per one million: ${countryInfo.recoveredPerOneMillion}`}</span>
        <span>{`Critical per one million: ${countryInfo.criticalPerOneMillion}`}</span>
      </div>
    </div>
  );
};

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
