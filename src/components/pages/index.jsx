import React from 'react'
import Footer from '../shared/footer';
import Header from '../shared/header';
import Home from './Home'
import { Main, MainStyle, PageWrapper } from './styles';

const IndexPage = function ({props}) {
    return <PageWrapper>
        <Header />
        <Main>
            <Home />
        </Main>
        <Footer />
    </PageWrapper>
}

export default IndexPage;