import { Grid } from '@mui/material';
import React from 'react'

import SplashImage from '../../../assets/images/splash.jpg';
import { HomeLayoutWrapper } from './styles';

const HomeLayout = function ({props}) {
    return <HomeLayoutWrapper>
        <Grid container spacing={2}>
            <Grid xs={12} md={8}>
                <img src={SplashImage} alt="" />
            </Grid>
            <Grid xs={12} md={4}>
                <div id="splash_header">
                    <h2>Including</h2>
                    <h1>Diversity</h1>

                    <span id="inclusive_blur">INCLUSIVE</span>
                </div>
                <div id="splash_text">
                    <p>
                    We offer a customized bouquet of Diversity, Equity, and Inclusion services to support you in creating a more inclusive workplace.
                    </p>
                </div>
                <div id="sign_up_container">
                    <input type="text" id="signup_newsletter" placeholder='Your email address' />
                    <button type='submit'>SIGN ME UP  i. </button>
                </div>
            </Grid>
        </Grid>
    </HomeLayoutWrapper>
}

export default HomeLayout;