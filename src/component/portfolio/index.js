import React, { Component } from 'react'
import Heading from '../shared/heading';
import styled from 'styled-components';
import PortfolioCard from './portfolioCard';
import FullWidthDiv from '../shared/fullWidthDiv';
import Gap from '../shared/gap';

import { Column, Row } from '../shared/grid';


const Icon_Dir = "";
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    title: 'Flypur',
                    logo: 'https://saroj85.github.io/SarojProfile/img/portfolio/flypur.png',
                    bigImage: 'https://saroj85.github.io/SarojProfile/img/portfolio/flypur-work.png',
                    url: 'https://flypur.com',
                    description: 'buyer seller communitty ',
                    skill: [
                        'Vue.js', 'html', 'css', 'javascript', 'react Native', 'responsive design'
                    ],

                },
                {
                    id: 2,
                    title: 'bogglingshop',
                    logo: 'https://saroj85.github.io/SarojProfile/img/portfolio/boggling.png',
                    bigImage: 'https://saroj85.github.io/SarojProfile/img/portfolio/boggling-work.png',
                    url: 'https://bogglingshop.com',
                    description: 'online clothing store ',
                    skill: [
                        'html', 'css', 'javascript', 'Jquery', "Bootstrap", 'responsive design'
                    ],

                },
                {
                    id: 3,
                    title: 'shodding',
                    logo: 'https://saroj85.github.io/SarojProfile/img/portfolio/shodding.png',
                    bigImage: 'https://saroj85.github.io/SarojProfile/img/portfolio/shoddingbig.png',
                    url: 'https://shodding.com',
                    description: 'online latest & premium clothing store ',
                    skill: [
                        'html', 'css', 'javascript', 'Jquery', "Bootstrap", 'responsive design'
                    ],

                },
                {
                    id: 4,
                    title: 'parkspace',
                    logo: 'https://saroj85.github.io/SarojProfile/img/portfolio/parkspace.png',
                    bigImage: 'https://saroj85.github.io/SarojProfile/img/portfolio/parkspacebig.png',
                    url: 'https://parkspace.in',
                    description: 'car parking online booking app ',
                    skill: [
                        'html', 'css', 'javascript', 'Jquery', "Bootstrap", 'responsive design'
                    ],

                },
                {
                    id: 5,
                    title: 'thebigstack',
                    logo: "assest/big-stack.png",
                    bigImage: "assest/bigstack.png",
                    url: 'https://flypur.com',
                    description: 'INDIA’S 1ST ONLINE POKER UNIVERSITY AND PREMIUM SHOPPING STORE',
                    skill: [
                        'html', 'css', 'javascript', 'react Js', 'Sass', 'responsive design'
                    ],

                },
                {
                    id: 6,
                    title: 'Sageit',
                    logo: 'assest/saget.png',
                    bigImage: 'assest/sagit-big.png',
                    url: 'http://hpie.in/sageit/',
                    description: 'Sage IT is a business technology company providing comprehensive range of IT products and services. These include: healthcare IT, business intelligence, analytics, data warehouse, integration solutions, web & mobile application development, cloud computing, big data, content management, testing, technology consulting, infrastructure & application support services.',
                    skill: [
                        'html', 'css', 'javascript', 'wordpress', 'responsive design'
                    ],

                },

            ]


        }
    }



    render() {
        return (
            <div>
                <FullWidthDiv>
                    <Heading title="Portfolio" color="#2c3e50" />
                    <Gap h="30px" />
                    <Row>
                        {this.state.data && this.state.data.map((item, index) => {
                            return <Column sm="4" key={index}><PortfolioCard item={item} /></Column>
                        })}
                    </Row>

                </FullWidthDiv>


            </div>
        )
    }
}


export default index;