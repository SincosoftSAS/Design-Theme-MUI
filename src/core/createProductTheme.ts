import { createTheme } from '@mui/material/styles';
import type { Theme, ThemeOptions } from '@mui/material/styles';

type Locale = Parameters<typeof createTheme>[1];

/**
 * Fábrica común de los temas de producto basados en `createTheme` (Sinco ERP, ADC, Bitákora).
 * Aporta lo que todos comparten (`spacing: 4`); lo que el producto declare lo pisa.
 *
 * Cosmos no pasa por acá: usa `extendTheme` (CSS vars, esquemas claro y oscuro) y `spacing: 8`.
 */
export const createProductTheme = (options: ThemeOptions, ...locales: Locale[]): Theme =>
  createTheme({ spacing: 4, ...options }, ...locales);
