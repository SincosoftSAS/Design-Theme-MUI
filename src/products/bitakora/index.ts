import { createProductTheme } from '../../core/createProductTheme';
import { localesCore } from '../../core/locales-core';

import { light } from './theme';

export const BitakoraTheme = createProductTheme(
  {
    ...light,
  },
  ...localesCore,
);
