import { setFilter } from "@/app/appSlice";
import { continentNames } from "@/common/constants";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { SearchContinent, searchContinentSchema } from "@/features/disease-statistics/lib/schema/";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./SearchContinent.module.css";

export const SearhContinent = () => {
  const { register, handleSubmit } = useForm<SearchContinent>({
    resolver: zodResolver(searchContinentSchema),
  });

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<SearchContinent> = data => {
    dispatch(setFilter({ filter: data }));
  };

  const continentList = () => {
    return continentNames.map(cN => {
      return <option value={cN}>{cN}</option>;
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <select className={styles.select} {...register("continentName")}>
        {continentList()}
      </select>
      <button type="submit">Найти</button>
    </form>
  );
};
