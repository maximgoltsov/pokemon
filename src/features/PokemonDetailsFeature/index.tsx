import usePokemonState from '@core/entities/pokemon/pokemonStore';
import { Dialog, DialogContent, DialogTitle, TextField } from '@mui/material';
import * as UI from './styled';

const PokemonDetailsFeature = () => {
  const { selectedPokemon, selectPokemon } = usePokemonState();

  if (!selectedPokemon) return null;

  return (
    <Dialog open={true} onClose={() => selectPokemon(undefined)}>
      <DialogTitle>{selectedPokemon.name}</DialogTitle>
      <DialogContent>
        <UI.StyledImageContainer><img alt="logo" src={selectedPokemon.sprites.front_default} /></UI.StyledImageContainer>
        <UI.StyledFieldWrapper><TextField InputProps={{ readOnly: true }} label="Height" value={selectedPokemon.height} variant="standard"/></UI.StyledFieldWrapper>
        <UI.StyledFieldWrapper><TextField InputProps={{ readOnly: true }} label="Base experience" value={selectedPokemon.base_experience} variant="standard"/></UI.StyledFieldWrapper>
        <UI.StyledFieldWrapper><TextField InputProps={{ readOnly: true }} label="Weight" value={selectedPokemon.weight} variant="standard"/></UI.StyledFieldWrapper>
      </DialogContent>
    </Dialog>
  );
};

export default PokemonDetailsFeature;
