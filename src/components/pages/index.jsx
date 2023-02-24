import React from 'react'
import Header from '../shared/header';
import Home from './Home'
import { MainStyle, PageWrapper } from './styles';

const IndexPage = function ({props}) {
    return <div style={PageWrapper}>
        <Header />
        <main style={MainStyle}>
            <Home />
        </main>
    </div>
}

export default IndexPage;