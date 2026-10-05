import { Components } from '@mui/material';

export const components: Components = {
  MuiDialogContent: {
    styleOverrides: {
      root: {
        padding: '8px 24px 24px',
      },
    },
  },
  MuiDialogActions: {
    styleOverrides: {
      root: {
        justifyContent: 'center',
        paddingBottom: 12,
        paddingTop: 12,
      },
    },
  },
  MuiAutocomplete: {
    styleOverrides: {
      root: {
        '&.MuiAutocomplete-root .MuiOutlinedInput-root.MuiInputBase-sizeSmall': {
          paddingBlock: 5.44,
        },
      },
      popupIndicator: {
        transform: 'none',
      },
    },
  },

  MuiButton: {
    styleOverrides: {
      sizeSmall: {
        minHeight: '30px',
      },

      root: {
        textTransform: 'none',
      },
    },
  },

  MuiCardContent: {
    styleOverrides: {
      root: {
        ':last-child': {
          paddingBottom: '16px',
        },
      },
    },
  },
  MuiInputAdornment: {
    styleOverrides: {
      root: {
        '.MuiSvgIcon-fontSizeMedium': {
          width: 20,
          height: 20,
          fontSize: 20,
        },
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        '.MuiOutlinedInput-input.MuiInputBase-inputSizeSmall': {
          paddingBlock: 7.95,
        },
      },
    },
  },
};
