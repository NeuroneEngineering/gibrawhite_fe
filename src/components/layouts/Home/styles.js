import styled from "styled-components";

import ServiceBG from "../../../assets/images/service_bg.png";
import GetStartedBG from "../../../assets/images/get_started_bg.png";

import { COLORS } from "../../../settings";

export const HomeLayoutWrapper = styled.div`
  box-sizing: border-box;

  section {
    margin-bottom: 100px;
    padding: 0px 100px;

    @media (max-width: 1000px) {
      padding: 0px 50px;
    }
    @media (max-width: 700px) {
      padding: 0px 30px;
    }
    @media (max-width: 500px) {
      padding: 0px 20px;
    }
  }
`;

export const Splash = styled.section`
  background-size: 100%;
  img {
    border-radius: 16px;
    width: calc(100% - 10px);
  }

  #splash_header {
    position: relative;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;

    div {
      box-sizing: border-box;
      margin-bottom: 32px;
    }

    h2 {
      font-family: Playfair Display;
      font-size: 68px;
      line-height: 54px;
      font-weight: 900;
      color: ${COLORS.primary};
    }

    h1 {
      font-family: Abril Fatface;
      font-style: normal;
      font-weight: 400;
      font-size: 92px;
      line-height: 54px;
      letter-spacing: 0.09em;

      color: ${COLORS.primary};

      text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
    }

    #inclusive_blur {
      position: absolute;
      top: 250px;
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

    #sign_up_container {
      display: flex;
      flex-flow: row nowrap;
      input {
        width: calc(100% - 120px);
        height: 70px;
        background: #000000;
        opacity: 0.5;
        border-radius: 8px 0px 0px 0px;
        display: inline-block;
      }
      button {
        width: 120px;
        display: inline-block;
      }
    }
  }
`;

export const Services = styled.section`
  background: url(${ServiceBG});
  height: 760px;
  margin-bottom: 0px !important;

  #service_img_grid {
    @media (max-width: 1000px) {
      display: none;
    }
  }

  div {
    position: relative;
    height: 100%;
  }

  #service_image {
    overflow-y: clip;
  }
  img {
    width: 600px;
    height: 600px;
    position: absolute;
    left: -100px;
    bottom: -135px;
  }

  #service_copy_grid {
    display: flex;
    align-items: center;
  }

  #service_copy {
    width: 570px;
    margin-left: auto;
    height: auto;
    justify-self: center;
    p {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 168.5%;
      /* or 40px */

      text-align: justify;
      letter-spacing: -0.11em;
    }
  }
`;

export const SecondShot = styled.section`
  img {
    width: 700px;
    height: 480px;

    @media (max-width: 1000px) {
      transform: scale(0.8);
      width: 100%;
      margin-top: 70px;
    }

    @media (max-width: 500px) {
      transform: scale(1);
      width: 100%;
      height: 300px;
    }
  }
  #second_shot_copy {
    h3 {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 300;
      font-size: 32px;
      line-height: 39px;
      /* identical to box height */

      letter-spacing: -0.005em;

      color: #242d38;

      text-shadow: 8px 32px 8px rgba(246, 191, 84, 0.02),
        5px 32px 2px rgba(39, 49, 61, 0.1);
      backdrop-filter: blur(36px);
    }
  }

  h2 {
    font-family: "Lato";
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 48px;
    letter-spacing: 0.14em;

    color: #07a0c3;

    opacity: 0.9;
    text-shadow: 8px 32px 8px rgba(246, 191, 84, 0.02),
      5px 32px 2px rgba(39, 49, 61, 0.05);
    backdrop-filter: blur(36px);
  }
`;

export const GetStarted = styled.section`
  background: url(${GetStartedBG});
  height: 660px;
  margin-bottom: 400px !important;
  padding-top: 100px !important;
  box-sizing: border-box !important;

  #get_started_header {
    img {
      margin: 0 auto;
      display: block;
    }

    span {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      img {
        display: inline-block;
        width: 100px;
      }

      h2 {
        width: calc(100% - 120px);
        text-align: center;
        font-family: "Lato";
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 48px;
        letter-spacing: 0.035em;

        /* saturated_purp */

        color: #f9f5ff;

        opacity: 0.8;
      }
    }
  }

  #get_started_bottom {
    .get_started_div {
      background: #f6bf54;

      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      width: 100%;
      height: 600px;

      box-sizing: border-box;
      padding: 80px 40px;
    }

    .get_started_copy {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;

      h3 {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 700;
        font-size: 64px;
        line-height: 78px;

        margin: 0;

        color: #242d38;
      }

      h6 {
        font-family: "Lato";
        font-style: normal;
        font-weight: 300;
        font-size: 36px;
        line-height: 43px;
        margin: 0;
      }
    }

    #get_started_hiring {
      span {
        height: 100%;
        width: calc(100% - 400px);
      }
      border-radius: 53px 38px 12px 90px;

      display: flex;
      flex-flow: row nowrap;
      position: relative;

      img {
        width: 380px;
        height: 560px;
        border-radius: 12px 40px 56px 32px;
        position: absolute;
        top: 80px;
        right: 40px;

        box-shadow: 12px 12px 12px rgba(0, 0, 0, 0.5);

        @media (max-width: 1000px) {
          display: none;
        }
      }
    }
    #get_started_training {
      border-radius: 53px 38px 90px 12px;
    }
  }
`;

export const Testimonial = styled.section`
  position: relative;
  #large_weird_man {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;