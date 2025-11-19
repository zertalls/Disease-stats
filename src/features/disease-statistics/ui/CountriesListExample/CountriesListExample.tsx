import { Country } from "@/common/components/Country/Country";
import { useGetCountryStatsQuery } from "@/features/disease-statistics/api/diseaseApi";
import styles from './CountriesListExample.module.css'

export const CountriesListExample = () => {
  const { data: countryList } = useGetCountryStatsQuery();
  let countriesRandomList = [];   

  const showRandomsCountries = () => {
    if (countryList) {
      for (let index = 0; index < 20; index++) {
        const countryIndex = Math.ceil(Math.random() * countryList?.length);
        countriesRandomList.push(countryList[countryIndex]);
      }
    }

    return countriesRandomList.map(country => {
        return (
            <Country countryData={country}/>
        )
    })
  };    

  return <div className={styles.div}>
        {showRandomsCountries()}
  </div>;
};
