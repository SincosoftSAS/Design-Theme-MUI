import type { Components, Theme } from '@mui/material/styles';
import { shadows } from './shadows';

/**
 * Pasa la rampa compartida a `MuiPaper.styleOverrides.elevationN`.
 *
 * Sinco ERP la aplica así, y no vía `theme.shadows`, porque los consumidores de Sinco ya dependen de
 * que `theme.shadows` siga siendo el de Material en el resto de componentes (menús, tooltips...).
 * `elevation0` se mantiene como la cadena `'none'` que tenía el tema original.
 */
export const paperElevationOverrides = (): NonNullable<
  Components<Theme>['MuiPaper']
>['styleOverrides'] => {
  const overrides: Record<string, unknown> = { elevation0: 'none' };
  for (let n = 1; n < shadows.length; n += 1) {
    overrides[`elevation${n}`] = { boxShadow: shadows[n] };
  }
  return overrides as NonNullable<Components<Theme>['MuiPaper']>['styleOverrides'];
};
