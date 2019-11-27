import React, { Component } from 'react';
import Heading from '../shared/heading';
import styled from 'styled-components';
import Gap from '../shared/gap';
import { Row, Hr } from '../shared/grid';
import FullWidthDiv from '../shared/fullWidthDiv';

const WrapperAbout = styled.div`
    width: 100%;
    .about{
        max-width: 400px;
        margin: auto;
        h2{
            color: #fff;
            font-size: 20px;
            font-weight: 500;
        }

        .d_btn{
            width: 200px;
            height: 55px;
            border: 1px solid #fff;
            color: #fff;
            background: transparent;
            font-size: 18px;
            text-transform: capitalize;
            outline: none;

            cursor: pointer;
            &:hover{
                background-color: #fff;
                border: 1px solid  #fff;
                color: #000;
            }
        }
    }

`;



class index extends Component {
    render() {
        return (
            <div>

                <Row height="80vh" bg="#18bc9c">
                    <FullWidthDiv>
                        <WrapperAbout>
                            <Gap h="50px" />
                            <Heading title="About us" color="#2c3e50" />
                            <Gap h="50px" />
                            <div className="about">
                                <h2>I am a User Interface Developer working
                                     on HTML5 / CSS3 / SASS , BS3 / BS4, jQuery,
                                     JavaScript,React Js, React Native ,
                                     Basic of VueJs, Responsive Web Design ,
                                    Photoshop with fast learning skill.</h2>
                                <Gap h="100px" />
                                <button className="d_btn">
                                    <a download={'Resume_saroj'} href="/assest/Resume.doc" >
                                   <i className="fas fa-download" /> download now !
                                   </a>
                                </button>
                            </div>
                        </WrapperAbout>
                    </FullWidthDiv>
                </Row>

            </div>
        )
    }
}


export default index