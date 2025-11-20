import z4 from "zod/v4";

export const searchContinentSchema = z4.object({
    continentName: z4.string()    
})

export type SearchContinent = z4.infer<typeof searchContinentSchema>