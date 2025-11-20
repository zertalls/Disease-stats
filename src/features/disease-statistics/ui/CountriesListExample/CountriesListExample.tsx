import { Country } from "@/common/components";
import { useGetCountryStatsQuery } from "@/features/disease-statistics/api/diseaseApi";
import styles from "./CountriesListExample.module.css";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { selectFilter } from "@/app/appSlice";
import { CovidCountryDataResponce } from "../../api/diseaseApi.types";

export const CountriesListExample = () => {
  const { data: countryList } = useGetCountryStatsQuery();
  const currFilter = useAppSelector(selectFilter);

  let filteredCountries: CovidCountryDataResponce[] = [];

  const showCountries = () => {
    if (countryList) {
      if ("continentName" in currFilter.filter) {        
        const filtered =  currFilter.filter.continentName !== 'All' ? countryList.filter(country => country.continent === currFilter.filter.continentName) : countryList;
        filteredCountries = filtered;
      } else if ("countryName" in currFilter.filter) {
        const findCountry = countryList.find(country => country.country === currFilter.filter.countryName);
        if (findCountry) filteredCountries.push(findCountry);
      } else {
        for (let index = 0; index < 20; index++) {
          const countryIndex = Math.ceil(Math.random() * countryList?.length);
          filteredCountries.push(countryList[countryIndex]);
        }
      }
    }

    return filteredCountries.map(country => {
      return <Country countryData={country} />;
    });
  };

  return (
    <div className={styles.div}>
      <h2 className={styles.header}>Список стран</h2>      
      {showCountries()}
    </div>
  );
};
