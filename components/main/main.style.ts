import styled, { css } from "styled-components";

export const MainWrapper = styled.main`
  display: inline-block;
  position: relative;
  width: 100%;
  height: calc(100vh - ${({ theme }) => theme.mainHeightDifference});
  padding: ${({ theme }) => theme.paddingSections};
  background: ${({ theme }) => theme.aliceBlueColor};
`;
