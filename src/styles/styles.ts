import styled, { css } from "styled-components";

const gradientColor = css`
  linear-gradient(to right, #fc5c7d, #6a82fb)
`;

const TitleWrapBase = css`
  width: 100%;
  height: 100%;
  min-height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    margin-top: 0.5rem;
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
  margin-bottom: 2.8rem;
  h2 {
    color: black;
    width: 100%;
    text-transform: capitalize;
  }
  span {
    width: 7rem;
  }
`;

export const NavigateBackStyle = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 1rem;
    color: #9C9C9C;

    & > *:first-child {
      margin-right: 1rem;
      font-size: 1.5rem;
      color: inherit;
    }
    h6 {    
      font-weight: 100;
      color: inherit;
      font-size: 0.9rem;
    }
`;
