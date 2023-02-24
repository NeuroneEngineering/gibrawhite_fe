import React from 'react';
import { ButtonWrapper } from './styles';

const SiteButton = ({children, OnClick, type, StyleConfig, ...props}) => {
    return <ButtonWrapper {...props} {...StyleConfig} type={type} onClick={OnClick ? OnClick : null}>
        {children}
    </ButtonWrapper>
}

export default SiteButton;