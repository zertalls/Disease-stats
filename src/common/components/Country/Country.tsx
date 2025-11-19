import { CovidCountryDataResponce } from "@/features/disease-statistics/api/diseaseApi.types";
import styles from './Country.module.css'

type Props = {
    countryData: CovidCountryDataResponce    
};

export const Country = ({countryData}: Props) => {
    const countryName = countryData.country
    const flagPath = countryData.countryInfo.flag

    return (
        <div className={styles.div}>
            <span className={styles.countryName}>{countryName}</span>            
            <img className={styles.img} src={flagPath}/>
        </div>
    );
};