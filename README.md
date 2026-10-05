# @sincosoftsas/design-theme-mui

Themes de MUI Material de los productos Sinco. Cada producto es un entry point independiente: quien
importa uno no carga los demás.

| Producto  | Import                                     | Export                                                           |
| --------- | ------------------------------------------ | ---------------------------------------------------------------- |
| Sinco ERP | `@sincosoftsas/design-theme-mui/sinco-erp` | `SincoERPTheme`                                                  |
| ADC       | `@sincosoftsas/design-theme-mui/adc`       | `ADCTheme`                                                       |
| Bitákora  | `@sincosoftsas/design-theme-mui/bitakora`  | `BitakoraTheme`                                                  |
| Cosmos    | `@sincosoftsas/design-theme-mui/cosmos`    | `CosmosLightTheme`, `CosmosDarkTheme`, `createCosmosTheme(mode)` |

```tsx
import { ThemeProvider } from '@mui/material/styles';
import { BitakoraTheme } from '@sincosoftsas/design-theme-mui/bitakora';

<ThemeProvider theme={BitakoraTheme}>…</ThemeProvider>;
```

### Cosmos

Cosmos resuelve claro y oscuro como dos temas (`palette.mode`):

```tsx
import { CosmosLightTheme, CosmosDarkTheme } from '@sincosoftsas/design-theme-mui/cosmos';

<ThemeProvider theme={dark ? CosmosDarkTheme : CosmosLightTheme}>…</ThemeProvider>;
```

El theme **nombra** las fuentes (Inter, Schibsted Grotesk, Nunito y Roboto) pero no las carga: la app debe
cargarlas, por ejemplo con Google Fonts en el `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Inter:wght@300;400;500;600;700&family=Schibsted+Grotesk:wght@400;500;600;700&family=Nunito:wght@300;400;500;600;700&display=swap"
/>
```

Sus extensiones de tipos (variante `body3`, degradados `aiGradient*`) viajan con el paquete: basta importar
desde `.../cosmos`.

## Instalación

```bash
npm i github:SincosoftSAS/Design-Theme-MUI
```

El paquete se compila al instalar (`prepare`) y se publica en ESM y CJS con sus tipos.

### Dependencias

Requiere MUI 9: `@mui/material`, `@emotion/react` y `@emotion/styled`. Sinco ERP y ADC usan además
`@mui/system` (peer opcional). Cosmos instala `@mui/utils` como dependencia.

**Los themes no dependen de MUI X** (DataGrid, DataGrid Pro, DatePickers...): ningún entry point los
importa. Aun así incluyen los estilos de `MuiDataGrid` y demás, que son solo objetos de configuración: si tu
app usa MUI X, el theme los aplica; si no la usa, no pasa nada. No cambia nada entre la versión gratuita
y la Pro, porque ambas usan la misma clave `MuiDataGrid`.

### Textos en español de DataGrid y DatePickers (opcional)

Cada librería de MUI X trae su propio catálogo de textos. Si usas alguna, aplícalo sobre el theme con el
entry opcional `locales-x`, que sí requiere `@mui/x-data-grid` y `@mui/x-date-pickers` (peers opcionales):

```tsx
import { ADCTheme } from '@sincosoftsas/design-theme-mui/adc';
import { withSpanishXLocales } from '@sincosoftsas/design-theme-mui/locales-x';

const theme = withSpanishXLocales(ADCTheme);
```

Para DataGrid Pro, instala `@mui/x-data-grid-pro` y configura la licencia en tu app
(`LicenseInfo.setLicenseKey`); el entry `locales-x` sirve igual con o sin Pro.

## Estructura

```
src/
├── core/                      ← lo compartido por Sinco ERP, ADC y Bitákora
│   ├── createProductTheme.ts    fábrica (spacing: 4 + locales de Material)
│   ├── shadows.ts               rampa de elevación
│   ├── paper-elevations.ts      la misma rampa como overrides de MuiPaper
│   ├── palette.ts               colores de estado, escala gris, divisor y tinta de texto/acciones
│   └── locales-core.ts          esES de Material
├── locales-x/                 ← opt-in: textos en español de DataGrid y DatePickers
└── products/
    ├── sinco-erp/               tema base
    ├── adc/                     extiende Sinco ERP: solo declara lo que cambia
    ├── bitakora/
    └── cosmos/                  tokens + base común + capa de marca (claro y oscuro)
```

`core/` contiene solo lo que es **idéntico** entre Sinco ERP, ADC y Bitákora. Cosmos se genera desde sus propios tokens (`ThemeCOSMOS.json`) y no usa `core/`. Los overrides de componentes de Sinco ERP
y Bitákora no coinciden en contenido, así que cada producto conserva los suyos.

## Añadir un producto

1. Crear `src/products/<nombre>/` con `palette`, `typography` y `components`, y un `index.ts` que llame a
   `createProductTheme(opciones, ...locales)`. Para reutilizar otro producto, extenderlo como hace ADC.
2. Registrar el entry point en `tsup.config.ts` y en `exports` de `package.json`.
3. `npm run typecheck && npm run build`.

## Scripts

| Script                 | Qué hace                             |
| ---------------------- | ------------------------------------ |
| `npm run build`        | Compila a `dist/` (ESM, CJS y tipos) |
| `npm run typecheck`    | Revisa tipos sin emitir              |
| `npm run format:check` | Verifica el formato con Prettier     |

## Cosmos: tokens

Los valores de Cosmos (paleta, tipografía, espaciado, forma y overrides de componentes) viven en
`src/products/cosmos/ThemeCOSMOS.json`. El resolver (`theme/utils/resolveToken.ts`) sigue los alias
`{ruta.al.token}` de ese archivo, así que un cambio de color de `primary` se hace **solo en el JSON**, sin
tocar ningún `.ts`.

| Archivo                           | Qué hace                                             |
| --------------------------------- | ---------------------------------------------------- |
| `ThemeCOSMOS.json`                | Tokens                                               |
| `theme/utils/resolveToken.ts`     | Resuelve los alias de los tokens                     |
| `theme/base/baseTheme.ts`         | Base común: sombras, semánticos, forma y componentes |
| `theme/cosmos/cosmos*Theme.ts`    | Capa de marca (claro y oscuro)                       |
| `theme/mui-theme-augmentation.ts` | Tipos de `body3` y de los degradados `aiGradient*`   |
| `createCosmosTheme.ts`            | Une la base y la capa de marca para un modo          |
