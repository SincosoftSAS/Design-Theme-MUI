import type { Components, Theme } from '@mui/material/styles';
import type {} from '@mui/x-data-grid/themeAugmentation';
import type {} from '@mui/x-date-pickers/themeAugmentation';
import { components as sincoComponents } from '../sinco-erp/components';
import { palette as sincoPalette } from '../sinco-erp/palette';
import { primary } from './palette';

export const components: Components<Theme> = {
  ...sincoComponents,
  // No se usa el MuiChip de @sinco/react: el instalado (1.2.8, peers MUI 7)
  // cambia el look (pill, fuente 13, colores chipDefault) y trae un variant
  // sin props que revienta el createStyled de MUI 5. Esta definición replica
  // la del bundle de adc-frontgenerales@0.17.2 (el look de producción).
  MuiChip: {
    styleOverrides: {
      sizeSmall: { height: 18 },
      sizeMedium: { height: 22 },
      icon: {
        color: sincoPalette.action.active,
        opacity: '70%',
      },
      root: {
        fontFamily: 'Roboto',
        fontSize: '11px',
        fontWeight: 400,
        lineHeight: '14px',
        letterSpacing: '0.16px',
        height: 'inherit',
        borderRadius: 4,
        '.MuiChip-deleteIconXsmall': { height: 12, width: 12 },
        '.MuiChip-deleteIconSmall': { height: 16, width: 16 },
        '.MuiChip-deleteIconMedium': { height: 20, width: 20 },
      },
    },
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        padding: 16,
      },
    },
  },
  MuiDialogContent: {
    styleOverrides: {
      root: {
        paddingTop: '16px !important',
        paddingBottom: 16,
        paddingLeft: 24,
        paddingRight: 24,
        display: 'flex',
        flexDirection: 'column',
      },
    },
  },
  MuiDialogActions: {
    styleOverrides: {
      root: {
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16,
      },
    },
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        paddingBottom: '16px !important',
      },
    },
  },
  MuiCardActions: {
    styleOverrides: {
      root: {
        padding: 16,
      },
    },
  },
  MuiFormControlLabel: {
    styleOverrides: {
      root: {
        marginLeft: 0,
      },
    },
  },
  MuiDataGrid: {
    styleOverrides: {
      columnHeaders: {
        backgroundColor: sincoPalette.background.paper,
        borderRadius: 4,
      },
      columnHeaderTitle: {
        fontWeight: '500',
      },
      columnHeader: {
        color: sincoPalette.text.primary,
      },
      row: {
        backgroundColor: sincoPalette.background.paper,
      },
      cell: {
        fontWeight: '400',
        backgroundColor: sincoPalette.background.paper,
      },
    },
    defaultProps: {
      columnHeaderHeight: 36,
      rowHeight: 42,
      hideFooter: true,
    },
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        backgroundColor: primary[200],
      },
    },
  },
};
