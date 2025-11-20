import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useState } from "react";
import { SearhContinent } from "./SearchContinent/SearchContinent";
import { SearhCountry } from "./SearchCountry/SearhCountry";
import { Button } from "@/common/components";
import { setFilter } from "@/app/appSlice";

export const GlobalSearch = () => {
  const [isContinent, setIsContinent] = useState(false);
  const dispatch = useAppDispatch()

  const switchSearch = () => {
    setIsContinent(!isContinent);
  };

  const resetFilter = () => {
    dispatch(setFilter({filter: {default: 'idle'}}))
  }

  return (
    <div>
      <Button title={isContinent ? "Континент" : "Страна"} onClick={switchSearch}/>
      {isContinent ? <SearhContinent /> : <SearhCountry />}
      <Button title="Сброс фильтра" onClick={resetFilter}/>
    </div>
  );
};
