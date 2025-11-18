import z4 from "zod/v4";

const countryInfo = z4.object({
  _id: z4.number(),
  iso2: z4.string(),
  iso3: z4.string(),
  lat: z4.number(),
  long: z4.number(),
  flag: z4.string(),
});

const covidCountryDataResponce = z4.object({
  updated: z4.number(),
  country: z4.string(),
  countryInfo: countryInfo,
  cases: z4.number(),
  todayCases: z4.number(),
  deaths: z4.number(),
  todayDeaths: z4.number(),
  recovered: z4.number(),
  todayRecovered: z4.number(),
  active: z4.number(),
  critical: z4.number(),
  casesPerOneMillion: z4.number(),
  deathsPerOneMillion: z4.number(),
  tests: z4.number(),
  testsPerOneMillion: z4.number(),
  population: z4.number(),
  continent: z4.string(),
  oneCasePerPeople: z4.number(),
  oneDeathPerPeople: z4.number(),
  oneTestPerPeople: z4.number(),
  activePerOneMillion: z4.number(),
  recoveredPerOneMillion: z4.number(),
  criticalPerOneMillion: z4.number(),
});

export type CovidCountryDataResponce = z4.infer<typeof covidCountryDataResponce> 
