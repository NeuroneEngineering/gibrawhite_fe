import styled from "styled-components";

import ServiceBG from "../../../assets/images/service_bg.png";
import GetStartedBG from "../../../assets/images/get_started_bg.png";
import SecondShotBG from "../../../assets/images/second_shot_bg.png";
import TestimonialBG from "../../../assets/images/testimonial_bg.png";
import SplashBG from "../../../assets/images/splash_jumbo_highlight.png";

import { COLORS } from "../../../settings";

export const Incl = styled.span``;
export const U = styled.span``;
export const Di = styled.span``;
export const N = styled.span``;
export const G = styled.span``;

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
  background: url(${SplashBG});
  img {
    border-radius: 16px;
    width: calc(100% - 10px);

    box-shadow: 0px 12px 16px 4px rgba(151, 71, 255, 0.1);
    border-radius: 8px;
  }

  #splash_header {
    position: relative;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;

    div {
      box-sizing: border-box;
      margin-bottom: 16px;
      width: 100%;
    }

    #highlight_logo {
      height: 60px;
      width: 60px;
      margin: 0px auto;
      margin-bottom: 30px;
      display: block;
      background: none;
      box-shadow: none;

      @media (max-width: 1000px) {
        margin-bottom: 32px;
        margin-top: 32px;
      }
    }

    h2 {
      font-family: Playfair Display;
      font-size: 68px;
      line-height: 54px;
      font-weight: 900;
      color: ${COLORS.primary};

      text-align: center;

      margin: 0px 0px 60px 0px;

      transition: all 1s ease-in;

      span {
        display: inline-block;
        box-sizing: border-box;
        position: relative;
      }

      #incl {
        color: #242d38;
      }

      #u {
        transition: all 0.25s ease-in-out;
      }

      #din {
        transform: rotate(12.2deg);
        top: 14px;
      }

      #n {
        transform: rotate(19.2deg);
        top: 30px;
      }

      #g {
        transform: rotate(35.2deg);
        top: 50px;
        left: -6px;
      }

      @media (max-width: 500px) {
        text-align: center;
      }
    }

    .h1_line {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
    }

    h1 {
      font-family: Abril Fatface;
      font-style: normal;
      font-weight: 400;
      font-size: 92px;
      line-height: 54px;
      text-align: center;

      letter-spacing: 0.05em;
      display: inline-block;

      color: #9747ff;

      color: ${COLORS.primary};

      text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
      margin: 0;
      margin-bottom: 20px;
    }

    #inclusive_blur {
      position: absolute;
      top: 300px;
      font-family: "Libre Baskerville";
      font-style: normal;
      font-weight: 700;
      font-size: 65px;
      line-height: 168.5%;
      /* identical to box height, or 110px */

      letter-spacing: -0.075em;

      color: #242d38;

      opacity: 0.05;
      filter: blur(2px);
    }

    p {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      text-align: center;
      letter-spacing: 0.1em;

      margin: 8px 0px 32px 0px;

      color: #330075;

      text-shadow: 0px 32px 8px rgba(51, 0, 117, 0.01);
    }

    #sign_up_container {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      #signup_newsletter {
        width: calc(100% - 125px);
        height: 72px;
        opacity: 0.5;
        display: inline-block;
        border-bottom: solid 2px ${COLORS.primary};
        position: relative;

        input {
          border-radius: 8px 0px 0px 0px;
          height: 68px;
          background: rgba(0, 0, 0, 0.5);
          width: 100%;
          padding: 16px;
          padding-top: 40px;
          z-index: 1;
          position: relative;

          box-sizing: border-box;

          font-size: 16px;
          font-family: Montserrat;
          color: ${COLORS.contrast.white};

          &:placeholder {
            color: ${COLORS.contrast.white};
          }
        }

        p {
          position: absolute;
          top: 0px;
          left: 16px;
          font-size: 12px;
          font-family: Work Sans;
          z-index: 2;
          color: ${COLORS.contrast.white};
        }
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

  h3 {
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    /* identical to box height */

    letter-spacing: 0.035em;

    color: #242d38;

    opacity: 0.8;

    margin: 0;
  }

  h1 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    line-height: 78px;
    /* identical to box height */

    color: #07a0c3;

    margin: 0;
  }

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
    width: 700px;
    height: 700px;
    position: absolute;
    left: -100px;
    bottom: -135px;
  }

  #service_copy_grid {
    display: flex;
    align-items: center;
  }

  #service_copy {
    width: 500px;
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
    }
  }
`;

export const SecondShot = styled.section`
  background: url(${SecondShotBG});
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;

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
    width: max-content;

    @media (max-width: 500px) {
      width: 100%;

      text-align: center;

      h3 {
        font-size: 24px;
      }

      h2 {
        font-size: 32px;
        letter-spacing: 0em;
      }
    }

    h3 {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 300;
      font-size: 32px;
      line-height: 39px;
      /* identical to box height */

      letter-spacing: -0.005em;

      color: #242d38;

      text-shadow: 5px 32px 2px rgba(200, 218, 241, 0.05);
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
    text-shadow: 5px 32px 2px rgba(200, 218, 241, 0.05);
    backdrop-filter: blur(36px);
  }
`;

export const GetStarted = styled.section`
  background: url(${GetStartedBG});
  height: 660px;
  margin-bottom: 400px !important;
  padding-top: 100px !important;
  box-sizing: border-box !important;

  @media (max-width: 500px) {
    height: auto;
    background-repeat: no-repeat;
    margin-bottom: 60px !important;
  }

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

      @media (max-width: 500px) {
        img {
          display: none;
        }

        h2 {
          width: 100%;
          font-size: 24px;
          letter-spacing: 0em;
          line-height: 24px;
        }
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

      @media (max-width: 500px) {
        height: 500px;
        padding: 40px;
      }
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

      @media (max-width: 500px) {
        h6 {
          font-size: 32px;
          line-height: 40px;
        }

        h3 {
          font-size: 48px;
          line-height: 60px;
        }
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
      }

      @media (max-width: 1000px) {
        img {
          display: none;
        }

        span {
          width: 100%;
        }
      }
    }
    #get_started_training {
      border-radius: 53px 38px 90px 12px;
    }
  }
`;

export const Testimonial = styled.section`
  padding-top: 50px !important;
  box-sizing: border-box;
  position: relative;
  height: 650px;

  h2 {
    font-family: "Lato";
    font-style: normal;
    font-weight: 300;
    font-size: 40px;
    line-height: 48px;
    /* identical to box height */

    letter-spacing: 0.14em;

    color: #330075;

    text-shadow: 32px 16px 5px rgba(246, 191, 84, 0.1),
      8px 32px 8px rgba(246, 191, 84, 0.02), 5px 32px 2px rgba(39, 49, 61, 0.05);
    backdrop-filter: blur(36px);
    #prioritize_blur {
      position: absolute;
      left: 0;
      top: -100px;
    }

    #yellow {
      color: #f6bf54;
    }
    span {
      position: relative;
      display: inline;
      img {
        position: absolute;
        top: 60px;
        left: 15%;
        width: 70%;
        margin: 0 auto;
      }
    }
  }

  #testimonial_image {
    position: absolute;
    bottom: -8px;
    right: 0px;

    z-index: 2;

    @media (max-width: 1000px) {
      display: none;
    }
  }

  #testimonial_container {
    background: url(${TestimonialBG});
    height: 400px;
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    z-index: 1;
    display: flex;
    flex-flow: column nowrap;
    padding: inherit;

    h3,
    p {
      margin: 0;
      margin-bottom: 16px;
    }
  }
`;

export const Resources = styled.section``;