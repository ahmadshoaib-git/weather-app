import styled, { css } from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: ${({ theme }) => theme.headerFooterHeight};
  padding: ${({ theme }) => theme.paddingSections};
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  overflow: hidden;
  border-top: 1rem;
  box-shadow: rgb(145 158 171 / 10%) -8px 8px 24px -4px;
  span {
    font-size: 0.8rem;
    text-transform: uppercase;
  }
`;
