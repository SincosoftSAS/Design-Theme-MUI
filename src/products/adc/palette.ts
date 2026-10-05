import type { PaletteOptions } from '@mui/material';
import { palette as sincoPalette } from '../sinco-erp/palette';

/** Azul violáceo de ADC. Exportado porque los overrides de componentes también lo referencian. */
export const primary = {
  ...sincoPalette.primary,
  light: '#939DE9',
  main: '#273BD3',
  dark: '#0E19B7',
  50: '#E5E7FA',
  100: '#BEC4F2',
  200: '#939DE9',
  300: '#6876E0',
  600: '#2335CE',
  700: '#1D2DC8',
  800: '#1726C2',
};

export const secondary = {
  ...sincoPalette.secondary,
  light: '#F6F6F6',
  main: '#D2D2D2',
  dark: '#DFDFDF',
  50: '#F9F9F9',
  100: '#EFEFEF',
  200: '#F6F6F6',
  300: '#DADADA',
  600: '#EAEAEA',
  700: 'rgba(231, 231, 231, 0.8)',
  800: '#E4E4E4',
};

/** Hereda todo de Sinco ERP (texto, colores de estado, fondos...) y cambia solo lo de ADC. */
export const palette: PaletteOptions = {
  ...sincoPalette,
  primary,
  secondary,
  grey: {
    ...sincoPalette.grey,
    300: '#DCDEE0',
  },
};
