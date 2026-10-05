import { ThemeOptions } from '@mui/material';

import { shadows } from '../../core/shadows';
import { palette } from './palette';
import { typography } from './typography';
import { components } from './components';

export const light: ThemeOptions = {
  typography,
  palette,
  spacing: 4,
  shadows,
  components,
};
