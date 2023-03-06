import React from 'react';
import { ButtonWrapper } from './styles';

const SiteButton = ({children, OnClick, type, StyleConfig, aos, ...props}) => {
    return <ButtonWrapper {...props} {...StyleConfig} data-aos={`${aos?.type}`} data-aos-duration={`${aos?.duration}`} type={type} onClick={OnClick ? OnClick : null}>
        {children}
    </ButtonWrapper>
}

export default SiteButton;