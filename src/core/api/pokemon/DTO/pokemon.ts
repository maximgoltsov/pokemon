import { EPokemonType } from '@core/entities/pokemon/enums/pokemonType';
interface IDefaultValue {
  name: string;
  url: string;
}

interface IPokemonType {
  type: {
    name: EPokemonType;
  }
}

interface IPokemonAbility {
  is_hidden: boolean;
  slot: number;
  ability: IDefaultValue;
}

export interface IPokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: IPokemonAbility[];
  sprites: {
    front_default: string;
  };
  types: IPokemonType[];
}
