export interface IGetPokemonRequest {
  id: string;
}

export interface IGetPokemonsRequest {
  page: number;
  limit: number;
}

export interface ICountedResult<T> {
  count: number;
  results: T[];
}
