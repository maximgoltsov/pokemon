import { getPokemonApi, getPokemonsApi } from '@core/api/pokemon';
import { IPokemon } from '@core/api/pokemon/DTO/pokemon';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface IPokemonState {
  pokemons: IPokemon[];
  selectedPokemon?: IPokemon;
  getPokemons: () => void;
  selectPokemon: (pokemon?: IPokemon) => void;
  filters: {
    types: Set<string>;
  },
  meta: {
    isLoading: boolean;
    limit: number;
    page: number;
    count: number;
    setPage: (page: number) => void;
    setLimit: (limit: number) => void;
  },
}

const usePokemonState = create<IPokemonState>()(immer((set, get) => ({
  pokemons: [],
  filters: {
    types: new Set<string>(),
  },
  selectPokemon: (pokemon) => {
    set(state => {
      state.selectedPokemon = pokemon;
    });
  },
  getPokemons: async () => {
    set(state => {
      state.meta.isLoading = true;
    });
    const { meta: { page, limit } } = get();

    const shortList = await getPokemonsApi({ page, limit });

    set(state => {
      state.meta.count = shortList.count;
    });

    const requests = shortList.results.map(item => getPokemonApi({ id: item.name }));
    Promise.all(requests).then(resp => {
      set(state => {
        state.pokemons = resp;
        state.meta.isLoading = false;
      });
    });
  },
  meta: {
    isLoading: false,
    limit: 10,
    page: 0,
    count: 0,
    setPage: (page) => {
      set(state => {
        state.meta.page = page;
      });
      get().getPokemons();
    },
    setLimit: (limit) => {
      set(state => {
        state.meta.limit = limit;
        state.meta.page = 0;
      });
      get().getPokemons();
    },
  },
})));


export default usePokemonState;
