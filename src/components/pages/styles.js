import styled from "styled-components";

export const PageWrapper = styled.div`
  box-sizing: border-box;
  overflow-x: hidden;
  width: 100%;
`

export const Main = styled.main`
  padding-top: 200px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding-top: 100px;
  }
`;
