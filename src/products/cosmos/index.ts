import { createCosmosTheme } from './createCosmosTheme';

export { createCosmosTheme };
export type { ThemeMode } from './theme/utils/resolveToken';

// La augmentation viaja con el paquete: re-exportarla evita que el empaquetador de tipos la descarte.
export * from './theme/mui-theme-augmentation';

export const CosmosLightTheme = createCosmosTheme('Light');
export const CosmosDarkTheme = createCosmosTheme('Dark');
