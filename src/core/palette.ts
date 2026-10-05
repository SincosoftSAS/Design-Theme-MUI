import type { PaletteOptions } from '@mui/material';

/**
 * Colores de estado compartidos por Sinco ERP, ADC y Bitákora. Cada producto puede sobrescribir uno
 * puntual al componer su paleta.
 */
export const statusPalette = {
  error: { main: '#D14343', light: '#D85F5F', dark: '#B51E1E', contrastText: '#FFFFFF' },
  warning: { main: '#FB8500', light: '#FC9726', dark: '#F85500', contrastText: '#FFFFFF' },
  info: { main: '#2D9FC5', light: '#4DADCE', dark: '#1172A3', contrastText: '#FFFFFF' },
  success: { main: '#8FC93A', light: '#A0D158', dark: '#60A918', contrastText: '#FFFFFF' },
} satisfies Pick<PaletteOptions, 'error' | 'warning' | 'info' | 'success'>;

/**
 * Escala gris compartida. **Falta el 900 a propósito**: cada producto define el suyo
 * (Sinco `#101840`, Bitákora `#A2A6AB`), así que se pasa al llamar a `greyScale`.
 */
const GREY_50_800 = {
  50: '#FAFBFF',
  100: '#F4F6FA',
  200: '#EDEFF5',
  300: '#E6E8F0',
  400: '#D8DAE5',
  500: '#C1C4D6',
  600: '#8F95B2',
  700: '#696F8C',
  800: '#474D66',
  A100: '#D8DAE5',
  A200: '#C1C4D6',
  A400: '#696F8C',
  A700: '#101840',
};

export const greyScale = (grey900: string) => ({ ...GREY_50_800, 900: grey900 });

/** Divisor compartido. */
export const divider = 'rgba(16,24,64,0.12)';

/**
 * Texto y acciones derivados de una tinta base (`'16,24,64'`). Todos los productos usan las mismas
 * opacidades y solo cambia el color de la tinta.
 */
export const ink = (rgb: string) => ({
  text: {
    primary: `rgba(${rgb},0.87)`,
    secondary: `rgba(${rgb},0.6)`,
    disabled: `rgba(${rgb},0.38)`,
  },
  action: {
    active: `rgba(${rgb},0.54)`,
    hover: `rgba(${rgb},0.04)`,
    selected: `rgba(${rgb},0.08)`,
    disabled: `rgba(${rgb},0.26)`,
    disabledBackground: `rgba(${rgb},0.12)`,
    focus: `rgba(${rgb},0.12)`,
  },
});
