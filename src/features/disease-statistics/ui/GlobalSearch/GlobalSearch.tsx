import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useState } from "react";
import { SearhContinent } from "./SearchContinent/SearchContinent";
import { SearhCountry } from "./SearchCountry/SearhCountry";
import { Button } from "@/common/components";
import { setFilter } from "@/app/appSlice";
import styles from "./GlobalSearch.module.css";

export const GlobalSearch = () => {
  const [isContinent, setIsContinent] = useState(false);
  const dispatch = useAppDispatch();

  const switchSearch = () => {
    setIsContinent(!isContinent);
  };

  const resetFilter = () => {
    dispatch(setFilter({ filter: { default: "idle" } }));
  };

  return (
    <div className={styles.div}>
      <h2 className={styles.header}>Фильтрация</h2>
      <div className={styles.search}>
        <Button title={isContinent ? "Континент" : "Страна"} onClick={switchSearch} />
        {isContinent ? <SearhContinent /> : <SearhCountry />}
      </div>

      <Button className={styles.reset} title="Сброс фильтра" onClick={resetFilter} />
    </div>
  );
};
