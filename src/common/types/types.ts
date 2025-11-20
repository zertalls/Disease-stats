export type LoadingStatus = 'idle' | 'loading' | 'success' | 'failed' 

export type Filter = {
    filter: FilterValue     
}

export type FilterValue = {
    default?: string 
    continentName?: string
    countryName?: string
}