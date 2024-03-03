export type MovieType = {
    homepage: string
    overview: string,
    vote_average: number,
    tagline: string,
    id: number,
    title: string,
    poster_path: string,
    release_date: string,
    runtime: number,
    production_companies: ProductionCompaniesType[],
    genres: GenresType[]
} 

export type ProductionCompaniesType = {
    logo_path: string,
    name: string
}

export type GenresType = {
    name: string, 
    id: number
}
