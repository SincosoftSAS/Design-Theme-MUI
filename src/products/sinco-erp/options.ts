import type { ThemeOptions } from '@mui/material/styles';
import { customBreakpointValues } from './breakpoints';
import { palette } from './palette';
import { typography } from './typography';
import { components } from './components';

export const themeOptions: ThemeOptions = {
  breakpoints: {
    ...customBreakpointValues,
  },
  palette,
  typography,
  spacing: 4,
  components,
};
