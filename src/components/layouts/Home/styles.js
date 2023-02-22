import styled from "styled-components";
import { COLORS } from "../../../settings";

export const HomeLayoutWrapper = styled.div`
  #splash_header {
    position: relative;
    h2 {
      font-family: Playfair Display;
      font-size: 68px;
      font-weight: 900;
      color: ${COLORS.primary};
    }

    h1 {
      font-family: Abril Fatface;
      font-style: normal;
      font-weight: 400;
      font-size: 92px;
      line-height: 124px;
      letter-spacing: 0.09em;

      color: ${COLORS.primary};

      text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
    }

    #inclusive_blur {
      position: absolute;
      top: 200px;
      font-family: "Libre Baskerville";
      font-style: normal;
      font-weight: 700;
      font-size: 65px;
      line-height: 168.5%;
      /* identical to box height, or 110px */

      letter-spacing: -0.075em;

      color: #242d38;

      opacity: 0.1;
      filter: blur(2px);
    }
  }

  #splash_text {
    p {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      text-align: center;
      letter-spacing: 0.13em;

      color: #330075;

      text-shadow: 0px 32px 8px rgba(51, 0, 117, 0.17);
    }
  }

  #sign_up_container {
    display: flex;
    flex-flow: row nowrap;
    input {
      width: 320px;
      height: 70px;
      background: #000000;
      opacity: 0.5;
      border-radius: 8px 0px 0px 0px;'
      display: inline-block;
    }
    button {
        width: calc(100% - 320px);
        display: inline-block;
    }
  }
`;
