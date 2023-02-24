import styled from "styled-components";

export const PageWrapper = {
  boxSizing: "border-box",
  // padding: "0px 50px",'
  overflowX: "hidden",
};

export const Main = styled.main`
  padding-top: 200px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding-top: 100px;
  }
`;
