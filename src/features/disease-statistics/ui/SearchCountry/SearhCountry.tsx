import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { searchCountrySchema, SearchInputs } from "@/features/disease-statistics/lib/schema/"

export const SearhCountry = () => {
  const {
    register,
    handleSubmit,
    reset,    
    formState: { errors },
  } = useForm<SearchInputs>({
    resolver: zodResolver(searchCountrySchema)
  })

  const onSubmit: SubmitHandler<SearchInputs> = (data) => {
    console.log(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Наберите название страны:
        <input {...register("searchCountry")} />
        <button type="submit">Найти</button>
         {errors.searchCountry && <span>{errors.searchCountry.message}</span>}
      </label>
    </form>
  )
}
