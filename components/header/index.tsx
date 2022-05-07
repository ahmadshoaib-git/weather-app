import React from "react";
import { HeaderWrapper } from "./header.style";
import Head from "next/head";
const Card: React.FC = () => {
  return (
    <HeaderWrapper>
      <Head>
        <title>Weather Application</title>
        <meta name="description" content="Latest weather application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <span>Weather Application</span>
    </HeaderWrapper>
  );
};

export default Card;
