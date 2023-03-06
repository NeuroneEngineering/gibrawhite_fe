import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 450px;

  background: radial-gradient(50% 50% at 50% 50%, #f6bf54 0%, #f3ad25 100%);

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;

  padding: 0px 100px;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    padding: 0px 50px;
  }
  @media (max-width: 700px) {
    padding: 0px 30px;
  }
  @media (max-width: 600px) {
    padding: 0px 20px;
  }

  #footer_top {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    #logo {
        @media(max-width: 600px) {
            transform: scale(0.8);
        }
    }
    span {
        display: inline-block;
        img {
            width: 20px;
            height: 20px;
            margin-left: 16px;
        }
    }
  }
`;
