import '@mui/material/styles';
import '@mui/material/Typography';
// Registra `MuiDataGrid` y los componentes de los selectores de fecha en la prop `components` del tema.
import type {} from '@mui/x-data-grid/themeAugmentation';
import type {} from '@mui/x-date-pickers/themeAugmentation';

declare module '@mui/material/styles' {
  // `body3` es una variante propia de Cosmos que MUI no trae: la definen `baseTheme.ts` y las marcas.
  interface TypographyVariants {
    body3: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
  }

  // Degradados del sistema de IA que `cosmosLightTheme.ts` cuelga del tema. Los nombres con
  // «Backgorund» son los que existen en runtime: no se corrigen acá para no romper a quien los lea.
  interface Theme {
    aiGradient?: string;
    aiGradientBorder?: string;
    aiBackgorundCard?: string;
    aiBackgorundBorder?: string;
  }
  interface ThemeOptions {
    aiGradient?: string;
    aiGradientBorder?: string;
    aiBackgorundCard?: string;
    aiBackgorundBorder?: string;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true;
  }
}
