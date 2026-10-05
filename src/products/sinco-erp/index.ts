import type { Theme } from '@mui/material/styles';
import { createProductTheme } from '../../core/createProductTheme';
import { localesCore } from '../../core/locales-core';
import { themeOptions } from './options';

export { themeOptions };

/** Tema base de Sinco ERP. ADC lo extiende. */
export const SincoERPTheme: Theme = createProductTheme(themeOptions, ...localesCore);
