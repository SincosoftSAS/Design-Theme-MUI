import type { PaletteOptions } from '@mui/material';
import { divider, greyScale, ink, statusPalette } from '../../core/palette';

const TINTA = '16,24,64';

export const palette = {
  primary: {
    main: '#1e62a1',
    light: '#5a8fd3',
    dark: '#003972',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#0CBBE2',
    light: '#67eeff',
    dark: '#008bb0',
    contrastText: '#ffffff',
  },
  ...ink(TINTA),
  ...statusPalette,
  grey: greyScale('#101840'),
  background: {
    default: '#f5f5f5',
    paper: '#fff',
  },
  divider,
} satisfies PaletteOptions;
