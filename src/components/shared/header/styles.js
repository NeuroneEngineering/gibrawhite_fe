import styled from "styled-components";
import { COLORS } from "../../../settings";

export const HeaderWrapper = styled.header`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  height: 100px;
  width: 100%;

  padding: 0px 100px;
  
  #logo_container {
    img {
        width: 40px;
        height: 40px;
        opacity: 0.7;
        
        :hover {
            cursor:pointer;
            opacity: 1;
        }
    }
  }

  #hamburger {
    display: none;
    width: 60px;
    height: 60px;
  }

  @media (max-width: 1000px) {
    padding: 0px 50px;
  }
  @media (max-width: 700px) {
    padding: 0px 30px;
  }
  @media (max-width: 600px) {
    padding: 50px 20px;
    position: relative;
    height: auto;

    #hamburger {
      display: block;
      margin-left: auto;
    }

    #md_header {
      display: ${({ showHeader }) => showHeader ? 'block' : 'none'};
    }

    div {
      padding-top: 0px !important;
    }

    #logo_container,
    #social_links {
      height: 50px;
      width: 100px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
    }
  }
    
   #social_links {
      height: 50px;
      width: 50px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      margin-left: auto;
      
      img {
        width: 18px;
        height: 18px;
        opacity: 0.8;
        
        :hover {
            cursor: pointer;
            opacity: 1;
        }
      }
    }

  #link_tags {
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
    height: 100%;

    line-height: 100px;
    text-align: center;

    .active {
      color: ${COLORS.textDark};
      opacity: 1;
    }

    a {
      text-decoration: none;
      font-family: Libre Baskerville;
      width: 100%;
      color: ${COLORS.textSlate};
      opacity: 0.6;
      font-size: 11px;
    }

    @media (max-width: 600px) {
      height: auto;
      line-height: 50px;

      a {
        text-align: right;
        width: 100%;
        display: block;
        height: 50px;
      }
    }
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
