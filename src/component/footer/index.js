import React, { Component } from 'react'
import { Row, Column } from '../shared/grid';
import styled from 'styled-components';
import Gap from '../shared/gap';
import FullWidthDiv from '../shared/fullWidthDiv';



const Footer = styled.div`
    width: 100%;
    background-color: #2c3e50;
    color: #fff;

    .web{
        width: 212px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: auto;
        a{
            width: 40px;
            height: 40px;
            border: 1px solid #fff;
            border-radius: 50%;
            font-size: 15px;
            text-align: center;
            display: inline-block;
            color: #fff;
            line-height: 40px;
            /* margin-right: 10px; */
        }
        #google:hover{
            background-color: #a51919;
        }
        #facebook:hover{
            background-color: #48649f;
        }
        #linkedin:hover{
            background-color: #0173b1;
        }
    }

`;



const FooterBottom = styled.div`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    color: #fff;
    background: #1a252f;
`;

class index extends Component {
    render() {
        return (
            <div>
                <Footer>
                    <Gap h="100px" />
                    <Row alignItems="self-start">

                        <Column sm="4" margin="0px">
                            <h2>LOCATION</h2>
                            <Gap h="15px" />
                            <p>Nirman Vihar
                        New Delhi</p>
                        </Column>


                        <Column sm="4"margin="0px" >
                            <h2>AROUND THE WEB</h2>
                            <Gap h="15px" />
                            <div className="web">
                                <a href="" id="facebook" target="_blank" >
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="" id="google" target="_blank">
                                    <i className="fab fa-google-plus-g"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/saroj85/" target="_blank" id="linkedin">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </Column>


                        <Column sm="4" margin="0px">
                            <h2>ABOUT FREELANCER</h2>
                            <Gap h="15px" />
                        </Column>

                    </Row>
                    <Gap h="100px" />
                </Footer>
                <FooterBottom>
                    Copyright © iam saroj 2019
            </FooterBottom>
            </div>
        )
    }
}


export default index;