import React from 'react'
import Header from '../shared/header';
import Home from './Home'
import { Main, MainStyle, PageWrapper } from './styles';

const IndexPage = function ({props}) {
    return <div style={PageWrapper}>
        <Header />
        <Main>
            <Home />
        </Main>
    </div>
}

export default IndexPage;