import React, { Component } from 'react';
import styled from 'styled-components';
import Gap from '../shared/gap';



const Banner = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: #18bc9c;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .user_img{
        width: 200px;
        height: 200px;
        border-radius: 50%;
    }
    .user_title{
        font-size: 43px;
        font-weight: bold;
        color: #fff;
        text-transform: uppercase;
    }
    .user_desc{
        font-size: 18px;
        font-weight: 600;
        color: #fff;

    }
`;



export default class index extends Component {
    render() {
        return (
            <Banner>
                <img className="user_img" src="https://saroj85.github.io/SarojProfile/img/saroj01.jpg" />
                <Gap h="15px" />
                <h1 className="user_title">* START SAROJ *</h1>
                <Gap h="15px" />
                <p className="user_desc">Web Designer- User Experience Developer</p>
            </Banner>
        )
    }
}
