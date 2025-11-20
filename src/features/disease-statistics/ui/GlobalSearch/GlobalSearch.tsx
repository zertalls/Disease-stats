import { useState } from "react";
import { SearhContinent } from "./SearchContinent/SearchContinent";
import { SearhCountry } from "./SearchCountry/SearhCountry";

export const GlobalSearch = () => {
  const [isContinent, setIsContinent] = useState(false);

  const switchSearch = () => {
    setIsContinent(!isContinent);
  };

  return (
    <div>
      <button onClick={switchSearch}>{isContinent ? "Континент" : "Страна"}</button>
      {isContinent ? <SearhContinent /> : <SearhCountry />}
    </div>
  );
};
