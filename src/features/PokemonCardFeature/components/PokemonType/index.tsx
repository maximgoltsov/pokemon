import { EPokemonType } from '@core/entities/pokemon/enums/pokemonType';
import { Chip } from '@mui/material';

interface IPokemonTypeProps {
  type: EPokemonType;
}

type TChipColor = 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';

const getColorByType = (type: EPokemonType):TChipColor => {
  switch (type) {
    case EPokemonType.BUG:
    case EPokemonType.DARK:
    case EPokemonType.DRAGON:
      return 'error';
    case EPokemonType.ELECTRIC:
    case EPokemonType.FAIRY:
    case EPokemonType.FIGHTING:
      return 'primary';
    case EPokemonType.FIRE:
    case EPokemonType.FLYING:
    case EPokemonType.GHOST:
      return 'secondary';
    case EPokemonType.GRASS:
    case EPokemonType.GROUND:
    case EPokemonType.ICE:
      return 'info';
    case EPokemonType.NORMAL:
    case EPokemonType.POISON:
    case EPokemonType.PSYCHIC:
      return 'success';
    case EPokemonType.ROCK:
    case EPokemonType.SHADOW:
    case EPokemonType.STEEL:
    case EPokemonType.WATER:
      return 'warning';
    default:
      return 'default';
  }
};

const PokemonType = (props: IPokemonTypeProps) => {
  const { type } = props;

  return <Chip color={getColorByType(type)} key={type}  label={type.toString()}/>;
};

export default PokemonType;
