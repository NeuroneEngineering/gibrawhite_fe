import React from 'react';
import { HeaderStyles, HeaderWrapper, ULStyles } from './styles';


import AOS from 'aos';
import 'aos/dist/aos.css';
import { Grid, Icon, Link } from '@mui/material';

import Hamburger from '../../../assets/icons/hamburger.svg';
import Logo from '../../../assets/images/Logo_SVG.png';
import TwitterLogo from '../../../assets/icons/twitter.svg';
import IGLogo from '../../../assets/icons/instagram.svg';


const Header = function ({ page }) {

    const [showMenu, setShowMenu] = React.useState(false);

    React.useEffect(() => {
        AOS.init();
    }, []);

    const toggleHeader = () => {
        setShowMenu(curr => (!curr));
        return;
    };

    return <HeaderWrapper showHeader={showMenu}>
        <img id="hamburger" src={Hamburger} alt="" onClick={toggleHeader} />

        <Grid id="md_header" container height={'auto'} justifyContent={'space-between'} alignItems={'center'}>
            <Grid item xs={12} sm={2}>
                <div id="logo_container" data-aos="fade-right" data-aos-duration="2000">
                    <img src={Logo} alt="" />
                </div>
            </Grid>
            <Grid item xs={12} sm={8}>
                <div id="link_tags">
                    <Grid container columns={16} spacing={0} justifyContent={'space-between'}>
                        <Grid item xs={16} sm={4}>
                            <a className="links active" data-aos="fade-right" data-aos-duration="2000" href="/">HOME</a>
                        </Grid>
                        <Grid item xs={16} sm={4}>
                            <a className="links" data-aos="fade-left" data-aos-duration="1800" href="/">ABOUT US</a>
                        </Grid>
                        <Grid item xs={16} sm={4}>
                            <a className="links" data-aos="fade-right" data-aos-duration="2200" href="/">SERVICES</a>
                        </Grid>
                        <Grid item xs={16} sm={4}>
                            <a className="links" data-aos="fade-left" data-aos-duration="2500" href="/">RESOURCES</a>
                        </Grid>
                        {/* <Grid item xs={15} sm={3}>
                            <a className="links" data-aos="fade-left" data-aos-duration="1800" href="/">CONTACT US</a>
                        </Grid> */}
                    </Grid>
                </div>
            </Grid>
            <Grid item xs={12} sm={2}>
                <div id="social_links">
                    <img src={TwitterLogo} alt="" /><img src={IGLogo} alt="" />
                </div>
            </Grid>
        </Grid>
    </HeaderWrapper>;
};

export default Header;