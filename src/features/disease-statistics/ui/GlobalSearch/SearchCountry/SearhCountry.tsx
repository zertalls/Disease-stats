import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { searchCountrySchema, SearchInputs } from "@/features/disease-statistics/lib/schema/";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { setFilter } from "@/app/appSlice";
import styles from './SearhCountry.module.css'

export const SearhCountry = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SearchInputs>({
    resolver: zodResolver(searchCountrySchema),
  });

  const dispatch = useAppDispatch()

  const onSubmit: SubmitHandler<SearchInputs> = data => {
    dispatch(setFilter({filter: data}))
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input className={styles.input} {...register("countryName")} placeholder="Наберите название страны..." />
      <button type="submit">Найти</button>
      {errors.countryName && <span>{errors.countryName.message}</span>}
    </form>
  );
};
