import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { SearchContinent, searchContinentSchema} from "@/features/disease-statistics/lib/schema/"
import { continentNames } from "@/common/constants"
import { useAppDispatch } from "@/common/hooks/useAppDispatch"
import { setFilter } from "@/app/appSlice"

export const SearhContinent = () => {
  const {
    register,
    handleSubmit,
    reset,       
  } = useForm<SearchContinent>({
    resolver: zodResolver(searchContinentSchema)
  })

   const dispatch = useAppDispatch()

  const onSubmit: SubmitHandler<SearchContinent> = (data) => {
    dispatch(setFilter({filter: data}))
    reset()
  }

  const continentList = () => {
    return continentNames.map(cN => {
        return (
            <option value={cN}>{cN}</option>
        )
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <select {...register("continentName")}>
            {continentList()}
        </select>
        <button type="submit">Найти</button>
    </form>
  )
}
