import React from 'react'
import { HeaderStyles, ULStyles } from './styles';

const Header = function ({page}) {

    return <header style={HeaderStyles}>
        <div className="link_tags">
            <ul className="link_ul" style={ULStyles}>
                <li className="links">HOME</li>
                <li className="links">SERVICES</li>
                <li className="links">RESOURCES</li>
                <li className="links">ABOUT US</li>
            </ul>
        </div>
    </header>
};

export default Header;