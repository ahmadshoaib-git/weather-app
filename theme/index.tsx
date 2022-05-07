import { lightTheme, darkTheme, ThemeType } from "styles/themes.styles";
import { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import { isMacintosh } from "../utils/index";

interface ThemeProps {
  theme: string;
}

const Theme: FC<PropsWithChildren<ThemeProps>> = (props) => {
  const { children, theme } = props;
  let selectedTheme: ThemeType = theme === "light" ? lightTheme : darkTheme;

  if (isMacintosh()) {
    selectedTheme.isMac = true;
  }

  return <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>;
};

export default Theme;
