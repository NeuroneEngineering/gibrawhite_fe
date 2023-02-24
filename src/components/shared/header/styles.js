import styled from "styled-components";

export const HeaderWrapper = styled.header`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  height: 100px;
  width: 100%;

  #link_tags {
    width: 500px;
    margin: 0 auto;
  }
`;

export const ULStyles = {
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "space-between",
  alignItems: "center",
  width: "500px",
  listStyleType: "none",
  margin: "0 auto",
  lineHeight: "120px",
  height: "100%",
};

export const LIStyles = {
  padding: "0px 4px",
  boxSizing: "border-box",
  margin: "0px 8px",
  fontFamily: "Libre Baskerville",
};
