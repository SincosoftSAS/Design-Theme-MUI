import type { Theme } from '@mui/material/styles';
import { createProductTheme } from '../../core/createProductTheme';
import { localesCore } from '../../core/locales-core';
import { themeOptions } from '../sinco-erp/options';
import { components } from './components';
import { palette } from './palette';

/** ADC: Sinco ERP con la paleta propia de ADC y overrides de Chip, Dialog, Card, DataGrid y Tooltip. */
export const ADCTheme: Theme = createProductTheme(
  { ...themeOptions, palette, components },
  ...localesCore,
);
