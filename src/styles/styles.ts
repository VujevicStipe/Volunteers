import styled, { css } from "styled-components";

const gradientColor = css`
  linear-gradient(to right, #fc5c7d, #6a82fb)
`;

const TitleWrapBase = css`
  width: 100%;
  height: 100%;
  min-height: 60px;
  top: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    width: 10rem;
    height: 2px;
    background: ${gradientColor};
    border-radius: 10px;
  }
`;

export const TitleWrapH1 = styled.div`
  ${TitleWrapBase}
  position: absolute;
  h1 {
    color: white;
    width: 100%;
  }
`;

export const TitleWrapH2 = styled.div`
  ${TitleWrapBase}
  h2 {
    color: black;
    width: 100%;
  }
  span {
    width: 7rem;
  }
`;
