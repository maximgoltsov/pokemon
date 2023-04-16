import { Card } from '@mui/material';
import styled from 'styled-components';

export const StyledPokemonImage = styled.img``;

export const StyledPokemonImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 96px;
`;

export const StyledCardHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledCard = styled(Card)`
  &:hover {
    cursor: pointer;
  }
`;
