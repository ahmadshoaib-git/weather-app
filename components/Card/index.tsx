import React from "react";
import { CardWrapper } from "./card.style";
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

const Card: React.FC<Props> = (props: Props) => {
  const { children } = props;
  return <CardWrapper>{children}</CardWrapper>;
};

export default Card;
