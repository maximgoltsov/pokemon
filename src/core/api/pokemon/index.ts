import { api } from '..';
import { IPokemon } from './DTO/pokemon';
import { IPokemonShort } from './DTO/pokemonShort';
import { ICountedResult, IGetPokemonRequest, IGetPokemonsRequest } from './types';

const baseUrl = (url: string) => ('https://pokeapi.co/api/v2/pokemon/' + url);

export const getPokemonApi = async ({ id }:IGetPokemonRequest) => {
  const { data } = await api.get<IPokemon>(baseUrl(`${id}`));

  return data;
};

export const getPokemonsApi = async ({ page, limit }: IGetPokemonsRequest) => {
  const { data } = await api.get<ICountedResult<IPokemonShort>>(baseUrl(''), {
    params: {
      offset: limit * (page),
      limit,
    },
  });

  return data;
};
