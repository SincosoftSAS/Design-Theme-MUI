import { defineConfig } from 'tsup';

// Un entry point por producto, más `core`. Las librerías de MUI quedan externas porque son
// `peerDependencies`: el consumidor usa su propia copia. Se publica en ESM y CJS, igual que MUI.
export default defineConfig({
  entry: {
    'core/index': 'src/core/index.ts',
    'products/sinco-erp/index': 'src/products/sinco-erp/index.ts',
    'products/adc/index': 'src/products/adc/index.ts',
    'products/bitakora/index': 'src/products/bitakora/index.ts',
    'products/cosmos/index': 'src/products/cosmos/index.ts',
    'locales-x/index': 'src/locales-x/index.ts',
  },
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  outDir: 'dist',
});
