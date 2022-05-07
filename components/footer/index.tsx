import React from "react";
import { AppYear, version } from "utils";
import { FooterWrapper } from "./footer.style";

const Card: React.FC = () => {
  const footerText = `© ${AppYear()} PackageX, Inc. All rights reserved. v ${version}`;
  return (
    <FooterWrapper>
      <span>{footerText}</span>
    </FooterWrapper>
  );
};

export default Card;
