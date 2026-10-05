import { createTheme } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';
import { esES as esESGrid } from '@mui/x-data-grid/locales';
import { esES as esESPickers } from '@mui/x-date-pickers/locales';

/**
 * Textos en español de DataGrid y DatePickers (MUI X). Los themes de producto **no** dependen de MUI X:
 * este entry es opt-in, solo para apps que usan esas librerías. Cada una trae su propio catálogo y no lo
 * hereda de las otras. Se importan de la versión gratuita: `x-data-grid-pro` la instala como dependencia
 * y expone los mismos textos, así que sirve igual con o sin Pro.
 */
export const localesX = [esESGrid, esESPickers] as const;

/** Devuelve el theme con los textos en español de DataGrid y DatePickers aplicados. */
export const withSpanishXLocales = (theme: Theme): Theme => createTheme(theme, ...localesX);
