import React from 'react'
import Header from '../shared/header';
import Home from './Home'
import { PageWrapper } from './styles';

const IndexPage = function ({props}) {
    return <PageWrapper>
        <Header />
        <main>
            <Home />
        </main>
    </PageWrapper>
}

export default IndexPage;