import { createTheme } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';
import getBaseThemeConfig from './theme/base/baseTheme';
import cosmosLightTheme from './theme/cosmos/cosmosLightTheme';
import cosmosDarkTheme from './theme/cosmos/cosmosDarkTheme';
import type { ThemeMode } from './theme/utils/resolveToken';

/**
 * Arma el tema Cosmos de un modo: la base común (`baseTheme`) con la capa propia de la marca encima.
 * `deepmerge` da prioridad al segundo objeto (la marca). Cosmos resuelve claro y oscuro como dos temas
 * distintos (`palette.mode`), no con CSS vars.
 */
export function createCosmosTheme(mode: ThemeMode): Theme {
  const brand = mode === 'Dark' ? cosmosDarkTheme : cosmosLightTheme;
  return createTheme(deepmerge(getBaseThemeConfig(mode), brand));
}
