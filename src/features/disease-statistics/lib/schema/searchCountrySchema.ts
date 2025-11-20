import z4 from "zod/v4";

export const searchCountrySchema = z4.object({
    countryName: z4.string().regex(/[a-zA-Z]+/, 'Цифры недоступны!')
})

export type SearchInputs = z4.infer<typeof searchCountrySchema>;