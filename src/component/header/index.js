import React, { Component } from 'react';
import styled from 'styled-components';
import Head from '../Head'

const Header = styled.header`
    width: 100%;
    height: 106px;
    background-color: #2c3e50;
    display: flex;
    padding: 0px 100px;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-between;
`;
const LogoWrapper = styled.div`
    width: 100px;
    height: 106px;
    display: flex;
    align-items: center;
    justify-content: center;
    .logo{
        font-size: 30px;
        color: #fff;
        text-transform: uppercase;
        font-weight: 700;
    }
`;

const NavListWrapper = styled.div`
    ul{
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        li{
            margin-right: 20px;
            &:last-child{
                margin-right: 0px;
            }
            a{
                font-size: 15px;
                font-weight: bold;
                color: #fff;
                text-decoration: none;

            }
        }
    }
`;


class index extends Component {
   
    render() {
        console.log(this.props)
        return (
            <div>
                <Header>
                    <LogoWrapper><span className="logo">Iam,saroj</span></LogoWrapper>
                    <NavListWrapper>
                        <ul>
                            <li onClick={() => this.props.ClickNav()}><a href="#">PORTFOLIO</a></li>
                            <li><a href="#">ABOUT</a></li>
                            <li><a href="#">CONTACT</a></li>
                        </ul>
                    </NavListWrapper>

                </Header>
            </div>
        )
    }
}


export default index



