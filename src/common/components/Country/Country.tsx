import { CovidCountryDataResponce } from "@/features/disease-statistics/api/diseaseApi.types"
import styles from "./Country.module.css"
import { Link } from "react-router"
import { paths } from "@/common/constants"

type Props = {
  countryData: CovidCountryDataResponce
}

export const Country = ({ countryData }: Props) => {
  const countryName = countryData.country
  const flagPath = countryData.countryInfo.flag

  return (
    <Link className={styles.div} to={`${paths.country.replace(':countryName', countryName)}`}>
      <span className={styles.countryName}>{countryName}</span>
      <img className={styles.img} src={flagPath} />
    </Link>
  )
}
