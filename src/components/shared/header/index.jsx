import React from 'react'
import { HeaderStyles, HeaderWrapper, ULStyles } from './styles';


import AOS from 'aos';
import 'aos/dist/aos.css';
import { Grid, Icon, Link } from '@mui/material';


const Header = function ({page}) {

    const [showMenu, setShowMenu] = React.useState(false);

    React.useEffect(()=>{
        AOS.init();
    }, [])

    return <HeaderWrapper>
        <Grid container height={'auto'} justifyContent={'space-between'} alignItems={'center'}>
            <Grid item xs={12} sm={2}>
                <div id="logo_container"></div>
            </Grid>
            <Grid item xs={12} sm={8}>       
                <div id="link_tags">
                    <Grid container columns={15} spacing={0} justifyContent={'space-between'}>
                        <Grid item xs={15} sm={3}>
                            <a className="links active" data-aos="fade-right" data-aos-duration="2000">HOME</a>
                        </Grid>
                        <Grid item xs={15} sm={3}>
                            <a className="links" data-aos="fade-left" data-aos-duration="1800">ABOUT US</a>
                        </Grid>
                        <Grid item xs={15} sm={3}>
                            <a className="links" data-aos="fade-right" data-aos-duration="2200">SERVICES</a>                            
                        </Grid>
                        <Grid item xs={15} sm={3}>
                            <a className="links" data-aos="fade-left" data-aos-duration="2500">RESOURCES</a>
                        </Grid>
                        <Grid item xs={15} sm={3}>
                            <a className="links" data-aos="fade-left" data-aos-duration="1800">CONTACT US</a>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
            <Grid item xs={12} sm={2}>
                <div id="social_links"></div>
            </Grid>
        </Grid>
        </HeaderWrapper>
};

export default Header;