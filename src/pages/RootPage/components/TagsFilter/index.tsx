import { EPokemonType } from '@core/entities/pokemon/enums/pokemonType';
import { Chip } from '@mui/material';
import { useState } from 'react';

const TagsFilter = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const tags = Object.values(EPokemonType);

  return (
    <div>
      {tags.map(tag => (<Chip key={tag} label={tag} />))}
    </div>
  );
};

export default TagsFilter;
