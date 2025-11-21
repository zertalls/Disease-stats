import { ErrorSnackBar, ProgressLine } from "@/common/components";
import { CountriesListExample } from "./CountriesListExample/CountriesListExample";
import { GlobalSearch } from "./GlobalSearch/GlobalSearch";
import { useGetCountryStatsQuery } from "../api/diseaseApi";

export const DiseaseStatistics = () => {
  const { isLoading } = useGetCountryStatsQuery(); 
  
  return (
    <div>
      {!isLoading ? (
        <>
          <GlobalSearch />
          <CountriesListExample />
          <ErrorSnackBar/>
        </>
      ) : (
        <ProgressLine />
      )}
    </div>
  );
};
