export const borders = {
  borderRadiusSmall: "0.25rem",
  borderRadiusMedium: "0.5rem",
  borderRadiusLarge: "0.75rem",
  borderRadiusExtraLarge: "1rem",
  borderRadiusHuge: "1.25rem",
  borderRadiusExtraHuge: "1.5rem",
  headerFooterHeight: "4rem",
  mainHeightDifference: "8rem",
  paddingSections: "1rem",
};

export const colors = {
  crayolaColor: "#2684FF",
  blueberryColor: "#4C9AFF",
  daJuiceColor: "#6554C0",
  blackColor: "#11142D",
  spaceCadetColor: "#172B4D",
  slateGrayColor: "#6B778C",
  cadetGreyColor: "#97A0AF",
  fullBlackColor: "#000000",
  fullWhiteColor: "#ffffff",
  aliceBlueColor: "#EDF3FD",
  lightGreyColor: "#dfe1e6",
  lightestGreyColor: "#EBECF0",
  warningOrangeColor: "#FFAB00",
  portlandOrangeColor: "#FF5630",
  mintColor: "#36B37E", // for success text color
  successBgColor: "#E3FCEF",
};

export const lightTheme = {
  ...colors,
  ...borders,
  background: "#f8fbff",
  loginBackground: "#fff",
  primaryTextColor: colors.spaceCadetColor,
  secondaryTextColor: colors.blackColor,
  primaryColor: colors.crayolaColor,
  secondaryColor: colors.blueberryColor,
  error: colors.portlandOrangeColor,
};

/**
 * Basically takes all the common styles
 * from light theme and just override the ones required
 * */
export const darkTheme = {
  ...lightTheme,
  background: "#1d1f28",
  loginBackground: "#1d1f28",
  primaryTextColor: "#fafafa",
  secondaryTextColor: "#fafafa",
  primaryColor: "#515d90",
  secondaryColor: colors.spaceCadetColor,
};

export type ThemeType = typeof lightTheme & {
  isMac?: boolean;
};
