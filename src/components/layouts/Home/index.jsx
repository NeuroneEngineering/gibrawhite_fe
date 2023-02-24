import { Container, Grid } from '@mui/material';
import React from 'react'

import SplashImage from '../../../assets/images/splash.jpg';
import DiversityWomen from '../../../assets/images/diversity_women.png';
import ServiceImg from '../../../assets/images/service_img.png';
import CaptionedLogo from '../../../assets/images/gibra_logo_captioned_white.png';
import HighlightLogo from '../../../assets/images/Logo_SVG.png';
import GetStartedLeft from '../../../assets/images/get_started_left.png';
import GetStartedRight from '../../../assets/images/get_started_right.png';
import Engineer from '../../../assets/images/engineer.PNG';
import TestimonialImg from '../../../assets/images/testimonial_img.png';
import { Splash, SecondShot, Services, HomeLayoutWrapper, GetStarted, Testimonial } from './styles';
import SiteButton from '../../shared/Buttons';

const HomeLayout = function ({props}) {
    return <HomeLayoutWrapper>
        <Splash>
            
        <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
                <img  src={SplashImage} alt="" />
            </Grid>
            <Grid item xs={12} md={4}>
                <div id="splash_header">
                    <div id="splash_logo">
                        <img src={HighlightLogo} alt="" id="highlight_logo" />
                    </div>  
                    <div>
                        <h2>Including</h2>
                        <h1>Diversity</h1>

                        <span id="inclusive_blur">INCLUSIVE</span>
                    </div>
                    <div id="splash_text">
                        <p>
                            We offer a customized bouquet of <strong>Diversity, Equity, and Inclusion</strong> services that create <strong>inclusive</strong> workspaces and enhance collaboration across team members!
                        </p>
                    </div>
                    <div id="sign_up_container">
                        <input type="text" id="signup_newsletter" placeholder='Your email address' />
                        <button type='submit'>SIGN ME UP</button>
                    </div>
                </div>
            </Grid>
        </Grid>
        </Splash>
        <SecondShot id="second_shot">
                        
        <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
                <div id="second_shot_copy">
                    <h3>We are industry leaders in</h3>
                    <h2>DIVERSITY, EQUITY <br />AND INCLUSION<br />HIRING</h2>
                    <SiteButton StyleConfig={{"margin": "40px 0px 0px 0px", "borderRadius": "15px 0px"}}>Learn More</SiteButton>
                </div>
            </Grid>
            <Grid item xs={12} md={7}>
                <img src={DiversityWomen} alt="" />
            </Grid>
        </Grid>
        </SecondShot>
        <Services>
            <Grid container spacing={2}>
                <Grid item md={0} lg={4} id="service_img_grid">
                    <div id="service_image">
                        <img src={ServiceImg} alt="" />
                    </div>
                </Grid>
                <Grid item xs={12} md={8} id="service_copy_grid">
                    <div id="service_copy">
                        <h3>OUR SERVICES</h3>
                        <h1>EDI Consulting</h1>
                        <p>
                            We are delighted to partner with you on your EDI journey. Building an inclusive work culture sometimes be a challenge. Our DEI consultants are industry veterans and are available to support you in your journey to an inclusive workspace
                        </p>
                        <SiteButton StyleConfig={{"margin": "40px 0px 0px 0px", "borderRadius": "15px 0px"}}>Learn More </SiteButton>
                    </div>
                </Grid>
            </Grid>
        </Services>
        <GetStarted>
            <Grid container spacing={4}>
                <Grid item container id="get_started_header">
                    <Container>
                        <img src={CaptionedLogo} alt="" />
                        <span id="get_started_headline">
                            <img src={GetStartedLeft} alt="" className="get_started_arrow" />
                            <h2>LETS GET YOUR DEI JOURNEY STARTED</h2>
                            <img src={GetStartedRight} alt="" className="get_started_arrow" />
                        </span>
                    </Container>
                </Grid>
                <Grid item container id="get_started_bottom" spacing={4}>
                    <Grid item xs={12} md={8}>
                        <div className='get_started_div' id="get_started_hiring">
                            <span className="get_started_copy">
                                <h3>Hiring</h3>
                                <h6>
                                     Access our wide network of professionals who fit your requirements.
                                </h6>
                                <SiteButton StyleConfig={{"borderRadius": "0px 0px 0px 32px", "border": "1px solid #27313D", "background": "none"}}>Contact GibraWhite</SiteButton>
                            </span>
                            <img src={Engineer} alt="" />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className="get_started_copy get_started_div" id='get_started_training'>
                            <h3>Training</h3>
                            <h6>
                                Experience a curated curriculum designed to foster collaboration among teams.
                            </h6>
                            <SiteButton StyleConfig={{"borderRadius": "0px 0px 32px 0px"}}>Begin</SiteButton>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </GetStarted>
        <Testimonial>
            <img src={TestimonialImg} alt="" id="testimonial_image"/>
            <h2>TOP COMPANIES <span id="header_prioritize">PRIORITIZE</span> DEI</h2>
        </Testimonial>
    </HomeLayoutWrapper>
}

export default HomeLayout;