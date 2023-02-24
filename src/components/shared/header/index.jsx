import React from 'react'
import { HeaderStyles, HeaderWrapper, ULStyles } from './styles';


import AOS from 'aos';
import 'aos/dist/aos.css';
import { Grid, Link } from '@mui/material';


const Header = function ({page}) {

    React.useEffect(()=>{
        AOS.init();
    }, [])

    return <HeaderWrapper data-aos="slide-down" data-aos-duration="2000">
        <Grid container spacing={4} justifyContent={'space-between'} alignItems={'center'}>
            <Grid item xs={12} md={2}>
                <div id="logo_container"></div>
            </Grid>
            <Grid item xs={12} md={8}>       
                <div id="link_tags">
                    <Grid container spacing={0} justifyContent={'space-between'}>
                        <Grid item xs={12} md={3}>
                            <Link className="links" data-aos="fade-right" data-aos-duration="2000">HOME</Link>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Link className="links" data-aos="fade-right" data-aos-duration="2200">SERVICES</Link>                            
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Link className="links" data-aos="fade-left" data-aos-duration="2500">RESOURCES</Link>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Link className="links" data-aos="fade-left" data-aos-duration="1800">ABOUT US</Link>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
            <Grid item xs={12} md={2}>
                <div id="social_links"></div>
            </Grid>
        </Grid>
    </HeaderWrapper>
};

export default Header;