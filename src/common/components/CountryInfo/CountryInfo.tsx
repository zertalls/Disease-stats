import { paths } from "@/common/constants";
import { useGetCountryStatsQuery } from "@/features/disease-statistics/api/diseaseApi";
import { CovidCountryDataResponce } from "@/features/disease-statistics/api/diseaseApi.types";
import { useNavigate, useParams } from "react-router";
import styles from "./CountryInfo.module.css";

export const CountryInfo = () => {
  const { data: countryList } = useGetCountryStatsQuery();
  const { countryName } = useParams();
  const navigate = useNavigate();

  const countryInfo: CovidCountryDataResponce = countryList?.find(country => country.country === countryName);

  console.log(countryInfo);  

  if (!countryInfo) {         
    return navigate(paths.wrongPath)   
  }

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
