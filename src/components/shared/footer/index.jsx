import { Grid } from '@mui/material';
import React from 'react';
import CreateLogo from '../widgets/Logo';
import { FooterWrapper } from './styles';

import IGLogo from '../../../assets/icons/instagram.svg';
import TWLogo from '../../../assets/icons/twitter.svg';
import Logo from '../../../assets/icons/logo.svg';

const Footer = () => {
    return <FooterWrapper>
        <Grid container flexDirection={'column'} spacing={2}>
            <Grid item xs={12}>
                <div id="footer_top">
                    <img src={Logo} alt="" id="logo" />
                    <span>
                        <img src={TWLogo} alt="" />
                        <img src={IGLogo} alt="" />
                    </span>
                </div>
            </Grid>
            <Grid item xs={12}>
                <div id="footer_links">
                    <Grid container fluid spacing={4}>
                        <Grid container item xs={12} lg={9} flexDirection={'row'}>
                            <Grid item xs={12} sm={6} md={2}>
                                <h4>COMPANY</h4>
                                <ul className="footer_navlist">
                                    <li>Services</li>
                                    <li>Training</li>
                                    <li>Coaching</li>
                                    <li>Careers</li>
                                    <li>Community</li>
                                </ul>
                            </Grid>
                            <Grid item xs={12} sm={6} md={2}>
                                <h4>ABOUT US</h4>
                                <ul className="footer_navlist">
                                    <li>Executives</li>
                                    <li>Organization</li>
                                    <li>Careers</li>
                                    <li>Conversations</li>
                                    <li>Projects</li>
                                </ul>
                            </Grid>
                            <Grid item xs={12} sm={6} md={2}>
                                <h4>SEARCH</h4>
                                <ul className="footer_navlist">
                                    <li>Openings</li>
                                    <li>Employees</li>
                                    <li>Consultants</li>
                                </ul>
                            </Grid>
                            <Grid item xs={12} sm={6} md={2}>
                                <h4>CONTACT US</h4>
                                <ul className="footer_navlist">
                                    <li>Support</li>
                                    <li>Report</li>
                                    <li>Call Us</li>
                                </ul>
                            </Grid>
                            <Grid item xs={12} sm={6} md={2}>
                                <h4>RESOURCES</h4>
                                <ul className="footer_navlist">
                                    <li>Podcasts</li>
                                    <li>Blog</li>
                                    <li>Events</li>
                                    <li>Talks</li>
                                </ul>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} lg={3} flexDirection={'column'}>
                            <p>51243, Lorem Ipsum Drive,<br />Edmonton, CA</p>
                            <p>+1, 232, 4291</p>
                            <p>+1, 232, 4291</p>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        </Grid>
    </FooterWrapper>
}

export default Footer;