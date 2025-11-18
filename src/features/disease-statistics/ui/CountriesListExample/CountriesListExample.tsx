import { useGetCountryStatsQuery } from "@/features/disease-statistics/api/diseaseApi";

export const CountriesListExample = () => {
    const{data: countryList} = useGetCountryStatsQuery()   
    
    console.log(typeof countryList, countryList?.length);

    const showRandomsCountries = () => {
        let countriesRandomList = []
        for (let index = 0; index < 20; index++) {
            // const countryIndex = Math.ceil(Math.random() * countryList?.length)            
            // console.log(countryIndex);                               
        }        
    }
    
    showRandomsCountries()

    console.log(countryList);    
    
    return (
        <div>
            Countries List Example            
        </div>
    );
};


