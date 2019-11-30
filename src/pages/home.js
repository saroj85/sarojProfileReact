import React, { Component } from 'react'

import Banner from '../component/banner';
import Portfolio from '../component/portfolio';
import About from '../component/about';
import Contact from '../component/contact';
import Footer from '../component/footer';
import Gap from '../component/shared/gap';

class home extends Component {
    render() {
        return (
            <div> <Banner />
            <Gap h="40px" />
            <Portfolio />
            <Gap h="40px" />
            <About />
            <Gap h="40px" />
            <Contact />
                
            </div>
        )
    }
}

export default home;