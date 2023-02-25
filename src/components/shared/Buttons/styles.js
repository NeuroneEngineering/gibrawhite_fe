import styled from "styled-components";
import { COLORS, DEFAULTS } from "../../../settings";

export const ButtonWrapper = styled.button`
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "80px")};
  background: ${({ background }) =>
    background ? background : COLORS.contrast.dark};
  color: ${({ color }) => (color ? color : COLORS.contrast.white)};
  box-sizing: border-box;
  margin: ${({ margin }) => (margin ? margin : "none")};
  padding: ${({ padding }) => (padding ? padding : "none")};

  border: ${({ border }) => (border ? border : "none")};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : "none"};

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
`;
