import { generateMedia } from "styled-media-query";

// default scale ratio
export const defaultScaleRatio = 1.125;

// font sizes
export const fontSizes = {
  _8: 8,
  _10: 10,
  _12: 12,
  _14: 14,
  _16: 16,
  _20: 20,
  _24: 24,
  _28: 28,
  _32: 32,
};

// example media queries
export const BREAKPOINT_XS = 320;
export const BREAKPOINT_SE = 375;
export const BREAKPOINT_PHONE = 480;
export const BREAKPOINT_PHABLET = 650; // 650 x 480
export const BREAKPOINT_TABLET = 768; // 768 x 576
export const BREAKPOINT_LARGETABLET = 992; // 992 x 720
export const BREAKPOINT_DESKTOP = 1200; // 1200 x 768
export const BREAKPOINT_MEDIUMDESKTOP = 1366; // 1366 x 768
export const BREAKPOINT_LARGEDESKTOP = 1600; // 1600 x 900
export const BREAKPOINT_FULLHDDESKTOP = 1922; // 1920 x 1080
export const BREAKPOINT_QHDDESKTOP = 2560; // 2560 x 1440
export const BREAKPOINT_QHDDESKTOP_HEIGHT = 1440; // 2560 x 1440
export const BREAKPOINT_UHD4KDESKTOP = 3840; // 3840 x 2160

export const media = generateMedia({
  xs: `${BREAKPOINT_XS}px`,
  lessThanXs: `${BREAKPOINT_XS - 1}px`,
  se: `${BREAKPOINT_SE}px`,
  lessThanSe: `${BREAKPOINT_SE - 1}px`,
  phone: `${BREAKPOINT_PHONE}px`,
  lessThanPhone: `${BREAKPOINT_PHONE - 1}px`,
  phablet: `${BREAKPOINT_PHABLET}px`,
  lessThanPhablet: `${BREAKPOINT_PHABLET - 1}px`,
  tablet: `${BREAKPOINT_TABLET}px`,
  lessThanTablet: `${BREAKPOINT_TABLET - 1}px`,
  largeTablet: `${BREAKPOINT_LARGETABLET}px`,
  lessThanLargeTablet: `${BREAKPOINT_LARGETABLET - 1}px`,
  desktop: `${BREAKPOINT_DESKTOP}px`,
  lessThanDesktop: `${BREAKPOINT_DESKTOP - 1}px`,
  mediumDesktop: `${BREAKPOINT_MEDIUMDESKTOP}px`,
  lessThanMediumDesktop: `${BREAKPOINT_MEDIUMDESKTOP - 1}px`,
  largeDesktop: `${BREAKPOINT_LARGEDESKTOP}px`,
  lessThanLargeDesktop: `${BREAKPOINT_LARGEDESKTOP - 1}px`,
  fullHdDesktop: `${BREAKPOINT_FULLHDDESKTOP}px`,
  lessThanFullHdDesktop: `${BREAKPOINT_FULLHDDESKTOP - 1}px`,
  qHdDesktop: `${BREAKPOINT_QHDDESKTOP}px`,
  lessThanQHdDesktop: `${BREAKPOINT_QHDDESKTOP - 1}px`,
  uHd4kDesktop: `${BREAKPOINT_UHD4KDESKTOP}px`,
  lessThanUHd4kDesktop: `${BREAKPOINT_UHD4KDESKTOP - 1}px`,
});
