import React from "react";
import { MainWrapper } from "./main.style";
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

const Main: React.FC<Props> = (props: Props) => {
  const { children } = props;
  return <MainWrapper>{children}</MainWrapper>;
};

export default Main;
