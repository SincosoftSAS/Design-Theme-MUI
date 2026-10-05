import type { Components, Theme } from '@mui/material/styles';
import { paperElevationOverrides } from '../../core/paper-elevations';
import { breakpoints } from './breakpoints';

export const components: Components<Theme> = {
  MuiTypography: {
    styleOverrides: {
      root: {
        fontSize: 13,
        [breakpoints.down('sm')]: {
          fontSize: '12px',
        },
        [breakpoints.up('lg')]: {
          fontSize: '14px',
        },
        [breakpoints.up('xl')]: {
          fontSize: '15px',
        },
      },
    },
  },
  MuiAutocomplete: {
    defaultProps: {},
  },
  MuiButton: {
    defaultProps: {
      size: 'small',
    },
  },
  MuiButtonGroup: {
    defaultProps: {
      size: 'small',
    },
  },
  MuiCheckbox: {
    defaultProps: {
      size: 'small',
    },
  },
  MuiFab: {
    defaultProps: {
      size: 'small',
    },
  },
  MuiFormControl: {
    defaultProps: {
      margin: 'none',
      size: 'small',
    },
  },

  MuiFormHelperText: {
    defaultProps: {
      margin: 'dense',
    },
  },
  MuiIconButton: {
    defaultProps: {
      size: 'small',
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      notchedOutline: {
        borderColor: 'rgba(16, 24, 64, 0.23)',
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      sizeSmall: {
        '& .MuiOutlinedInput-input': {
          padding: '7px 13px',
        },
      },
    },
    defaultProps: {
      margin: 'none',
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      sizeSmall: {
        '&.MuiInputLabel-shrink': {
          top: 5,
        },
        lineHeight: '17px',
      },
      outlined: {
        '&.Mui-focused ': {
          top: 4.2,
        },
      },
    },
    defaultProps: {
      margin: 'dense',
    },
  },
  MuiRadio: {
    defaultProps: {
      size: 'small',
    },
  },
  MuiSwitch: {
    defaultProps: {
      size: 'small',
    },
  },
  MuiTextField: {
    defaultProps: {
      margin: 'none',
      size: 'small',
    },
  },
  MuiList: {
    defaultProps: {
      dense: true,
    },
  },
  MuiMenuItem: {
    defaultProps: {
      dense: true,
    },
  },
  MuiTable: {
    defaultProps: {
      size: 'small',
    },
  },
  MuiPaper: {
    styleOverrides: paperElevationOverrides(),
  },
};
