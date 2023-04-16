import usePokemonState from '@core/entities/pokemon/pokemonStore';
import PokemonCardFeature from '@features/PokemonCardFeature';
import PokemonDetailsFeature from '@features/PokemonDetailsFeature';
import { Grid,  TablePagination } from '@mui/material';
import { useEffect } from 'react';
import * as UI from './styled';

const RootPage = () => {
  const { pokemons, getPokemons, selectPokemon, meta: { count, limit, page, setLimit, setPage, isLoading } } = usePokemonState();

  useEffect(() => {
    getPokemons();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UI.Wrapper>
      <Grid container spacing={2}>
        {pokemons.map((item) => (
          <Grid item key={item.name} lg={3} md={4} sm={6} xl={2} xs={12}>
            <PokemonCardFeature isLoading={isLoading} pokemon={item} onClick={() => selectPokemon(item)} />
          </Grid>
        ))}
      </Grid>
      <br />
      <Grid container justifyContent={'center'}>
        <TablePagination
          count={count}
          page={page}
          rowsPerPage={limit}
          onPageChange={(_, nextPage) => setPage(nextPage)}
          onRowsPerPageChange={(event) => setLimit(+event.target.value)}  />
      </Grid>
      <PokemonDetailsFeature />
    </UI.Wrapper>
  );
};

export default RootPage;
