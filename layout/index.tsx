import React from "react";
import { Header, Main, Footer } from "components";
export interface Props {
  children?:
    | React.ReactNode
    | React.ReactChild
    | React.ReactChild[]
    | JSX.Element
    | JSX.Element[]
    | string
    | string[];
  fullWidth?: boolean;
}

const Layout: React.FC<Props> = (props: Props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
