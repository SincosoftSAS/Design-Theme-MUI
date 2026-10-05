import { PaletteOptions } from '@mui/material';
import { divider, greyScale, ink, statusPalette } from '../../core/palette';

const TINTA = '8,21,36';

const Palette: PaletteOptions = {
  primary: {
    main: '#1B344C',
    dark: '#081524',
    light: '#3D5267',
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#2D9FC5',
    dark: '#1172A3',
    light: '#4DADCE',
    contrastText: '#FFFFFF',
  },
  ...ink(TINTA),
  ...statusPalette,
  background: {
    paper: '#FFFFFF',
    default: '#F1F0EE',
  },
  divider,
  grey: greyScale('#A2A6AB'),
};
export const palette = Palette;
