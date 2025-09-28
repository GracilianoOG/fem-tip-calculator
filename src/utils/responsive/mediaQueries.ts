import { breakpoints } from "./breakpoints";

const MEDIA_TYPE = "@media screen" as const;

export const mediaQueries = {
  mobile: `${MEDIA_TYPE} and (min-width: ${breakpoints.sm})`,
  tablet: `${MEDIA_TYPE} and (min-width: ${breakpoints.md})`,
  laptop: `${MEDIA_TYPE} and (min-width: ${breakpoints.lg})`,
  desktop: `${MEDIA_TYPE} and (min-width: ${breakpoints.xl})`,
  largeDesktop: `${MEDIA_TYPE} and (min-width: ${breakpoints.xxl})`,
} as const;
