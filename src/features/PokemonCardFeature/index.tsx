import { IPokemon } from '@core/api/pokemon/DTO/pokemon';
import { Card, CardContent, Skeleton, Typography } from '@mui/material';

import PokemonType from './components/PokemonType';
import * as UI from './styled';

interface IPokemonCardFeatureProps {
  pokemon: IPokemon;
  isLoading: boolean;
  onClick: () => void;
}

const PokemonCardFeature = (props: IPokemonCardFeatureProps) => {
  const { pokemon, isLoading, onClick } = props;

  if (isLoading) {
    return (
      <Card>
        <CardContent>
          <Skeleton height={20} variant="rounded" />
          <br />
          <Skeleton height={60} variant="rounded" />
          <br />
          <Skeleton height={32} variant="rounded" />
        </CardContent>
      </Card>
    );
  }

  if (!pokemon) {
    return (
      <Card>
        <Typography>
          Ошибка загрузки
        </Typography>
      </Card>
    );
  }

  return (
    <UI.StyledCard onClick={onClick}>
      <CardContent>
        <UI.StyledCardHeader>
          <Typography component="span" variant="h6">
            {pokemon.name}
          </Typography>
        </UI.StyledCardHeader>
        <UI.StyledPokemonImageContainer>
          <UI.StyledPokemonImage
            src={pokemon.sprites.front_default}
            title="pokemon image"
          />
        </UI.StyledPokemonImageContainer>
        <div>
          {pokemon.types.map(type => (
            <PokemonType type={type.type.name} />
          ))}
        </div>
      </CardContent>
    </UI.StyledCard>
  );
};

export default PokemonCardFeature;
