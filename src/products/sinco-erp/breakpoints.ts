import { createBreakpoints } from '@mui/system';

export const customBreakpointValues = {
  values: {
    xs: 0,
    sm: 1024,
    md: 1280,
    lg: 1440,
    xl: 1890,
    mobile: 0,
    tablet: 640,
    laptop: 1024,
    desktop: 1200,
  },
};
export const breakpoints = createBreakpoints({ ...customBreakpointValues });
