import { Container, Grid } from '@mui/material';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import SplashImage from '../../../assets/images/splash.jpg';
import DiversityWomen from '../../../assets/images/diversity_women.png';
import ServiceImg from '../../../assets/images/service_img.png';
import CaptionedLogo from '../../../assets/images/gibra_logo_captioned_white.png';
import HighlightLogo from '../../../assets/images/Logo_SVG.png';
import GetStartedLeft from '../../../assets/images/get_started_left.png';
import GetStartedRight from '../../../assets/images/get_started_right.png';
import Engineer from '../../../assets/images/engineer.PNG';
import TestimonialImg from '../../../assets/images/testimonial_img.png';
import ResourcesImage from '../../../assets/images/resources_image.png';
import PrioritizeSVG from '../../../assets/images/prioritize_stroke.svg';
import PrioritizeBlur from '../../../assets/images/prioritize_header_blur_bg.png';
import { Splash, SecondShot, Services, HomeLayoutWrapper, GetStarted, Testimonial, Resources, Incl, U, Di, N, G } from './styles';
import SiteButton from '../../shared/Buttons';
import { COLORS } from '../../../settings';

const HomeLayout = function ({props}) {

    const inclRef = React.useRef(null);
    const uRef = React.useRef(null);
    const diRef = React.useRef(null);
    const nRef = React.useRef(null);
    const gRef = React.useRef(null);

    let refArr = [inclRef, uRef, diRef, nRef, gRef];
    React.useEffect(()=>{
        AOS.init();

        let u = uRef.current;
        
        setTimeout(()=>{
            
        }, 1900)
    }, [])
    return <HomeLayoutWrapper data-aos="fade-in" data-aos-duration="2000">
        <Splash>
            
        <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
                <img  src={SplashImage} alt="" data-aos="fade-up" data-aos-duration="2000" />
            </Grid>
            <Grid item xs={12} md={4}>
                <div id="splash_header">
                    <div id="splash_logo">
                        <img src={HighlightLogo} alt="" id="highlight_logo" data-aos="fade-up" data-aos-duration="3000" data-aos-distance="8px" data-aos-easing="ease-out" />
                    </div>  
                    <div>
                        <h2>
                            <Incl  ref={inclRef} data-aos="slide-right" data-aos-duration="1000" id="incl">Incl</Incl>
                            <U  ref={uRef} data-aos="slide-left" data-aos-duration="2000" id="u" >u</U>
                            <Di  ref={diRef} data-aos="slide-left" data-aos-duration="2500" id="din" >di</Di>
                            <N  ref={nRef} data-aos="slide-left" data-aos-duration="2800" id="n" >n</N>
                            <G  ref={gRef} data-aos="slide-left" data-aos-duration="3000" id="g" >g</G>
                        </h2>
                        <div className="h1_line">
                            <h1 data-aos="slide-up" data-aos-duration="500">Di</h1> <h1 data-aos="slide-up" data-aos-duration="800">ver</h1> <h1 data-aos="slide-up" data-aos-duration="1600">sit</h1> <h1 data-aos="slide-up" data-aos-duration="2800">y</h1>
                        </div>
                        <span id="inclusive_blur" data-aos="zoom-in" data-aos-duration="3000">INCLUSIVE</span>
                    </div>
                    <div id="splash_text">
                        <p data-aos="slide-up" data-aos-duration="1700">
                            We offer a customized bouquet of <strong>Diversity, Equity, and Inclusion</strong> services that create <strong>inclusive</strong> workspaces and enhance CDcollaboration across team members!
                        </p>
                    </div>
                    <div id="sign_up_container"  data-aos="slide-up" data-aos-duration="200">
                        <span id="signup_newsletter">
                            <p>SIGN UP FOR OUR NEWSLETTER</p>
                            <input type="email" placeholder='Your email address'/>
                        </span>
                        <button type='submit' data-aos="fade-left" data-aos-duration="1000">SIGN ME UP</button>
                    </div>
                </div>
            </Grid>
        </Grid>
        </Splash>
        <SecondShot id="second_shot" data-aos="fade-up" data-aos-duration="2000">
                        
        <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
                <div id="second_shot_copy">
                    <h3>We are industry leaders in</h3>
                    <h2>DIVERSITY, EQUITY <br />AND INCLUSION<br />HIRING</h2>
                    <SiteButton StyleConfig={{"margin": "40px 0px 0px 0px", "borderRadius": "15px 0px"}}>Learn More</SiteButton>
                </div>
            </Grid>
            <Grid item xs={12} md={7}>
                <img src={DiversityWomen} alt=""  data-aos="fade-left" data-aos-duration="3000"/>
            </Grid>
        </Grid>
        </SecondShot>
        <Services data-aos="fade-in" data-aos-duration="1500">
            <Grid container spacing={2}>
                <Grid item md={0} lg={4} id="service_img_grid">
                    <div id="service_image">
                        <img src={ServiceImg} alt="" data-aos="slide-up" data-aos-duration="3000"/>
                    </div>
                </Grid>
                <Grid item xs={12} md={8} id="service_copy_grid">
                    <div id="service_copy">
                        <h3 data-aos="fade-in" data-aos-duration="2000">OUR SERVICES</h3>
                        <h1 data-aos="fade-in" data-aos-duration="2000">EDI Consulting</h1>
                        <p data-aos="fade-left" data-aos-duration="2500">
                            We are delighted to partner with you on your EDI journey. Building an inclusive work culture sometimes be a challenge. Our DEI consultants are industry veterans and are available to support you in your journey to an inclusive workspace
                        </p>
                        <SiteButton data-aos="fade-up" data-aos-duration="2500" StyleConfig={{"margin": "40px 0px 0px 0px", "borderRadius": "15px 0px"}}>Learn More </SiteButton>
                    </div>
                </Grid>
            </Grid>
        </Services>
        <GetStarted>
            <Grid container spacing={4}>
                <Grid item container id="get_started_header">
                    <Container>
                        <img data-aos="fade-down" data-aos-duration="2500" src={CaptionedLogo} alt="" />
                        <span id="get_started_headline">
                            <img data-aos="fade-right" data-aos-duration="2500" src={GetStartedLeft} alt="" className="get_started_arrow" />
                            <h2  data-aos="fade-up" data-aos-duration="3000">LETS GET YOUR DEI JOURNEY STARTED</h2>
                            <img data-aos="fade-left" data-aos-duration="2500" src={GetStartedRight} alt="" className="get_started_arrow" />
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
                                <SiteButton StyleConfig={{"borderRadius": "0px 0px 0px 32px", "border": "1px solid #27313D", "background": "none", "color": COLORS.contrast.dark}}>Contact GibraWhite</SiteButton>
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
            <h2>
                <img src={PrioritizeBlur} id="prioritize_blur" />
                TOP COMPANIES <span id="header_prioritize">PRIORITIZE <img data-aos="slide-up" data-aos-duration="500" src={PrioritizeSVG}></img></span> <span id="yellow">DEI</span>
            </h2>
            <div id="testimonial_container">
                <h3>"</h3>
                <p>Starting a DEI program on the campus was the best decision made by the board all of 2022! It is quite remarkable what it did to our operations.</p>
                <h3 id="bottom_quote">"</h3>
                <p>Jimmy Lomberton</p>
                <p>CFO, Delta Airlines</p>
            </div>
        </Testimonial>
        <Resources>
            
            
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <div id="splash_header">
                        <div id="splash_logo">
                            <img src={HighlightLogo} alt="" id="highlight_logo" data-aos="fade-up" data-aos-duration="3000" data-aos-distance="8px" data-aos-easing="ease-out" />
                        </div>  
                        <div>
                            <h2 data-aos="slide-up" data-aos-duration="1000">Including</h2>
                            <h1 data-aos="slide-up" data-aos-duration="2500">Diversity</h1>

                            <span id="inclusive_blur" data-aos="zoom-in" data-aos-duration="3000">INCLUSIVE</span>
                        </div>
                        <div id="splash_text">
                            <p data-aos="slide-up" data-aos-duration="1700">
                                We offer a customized bouquet of <strong>Diversity, Equity, and Inclusion</strong> services that create <strong>inclusive</strong> workspaces and enhance collaboration across team members!
                            </p>
                        </div>
                        <div id="sign_up_container"  data-aos="slide-up" data-aos-duration="200">
                            <span id="signup_newsletter">
                                <p>SIGN UP FOR OUR NEWSLETTER</p>
                                <input type="email" placeholder='Your email address'/>
                            </span>
                            <button type='submit' data-aos="fade-left" data-aos-duration="1000">SIGN ME UP</button>
                        </div>
                    </div>
                </Grid>
                
                <Grid item xs={12} md={8}>
                    <img  src={ResourcesImage} alt="" data-aos="fade-up" data-aos-duration="2000" />
                </Grid>
            </Grid>
        </Resources>
    </HomeLayoutWrapper>
}

export default HomeLayout;