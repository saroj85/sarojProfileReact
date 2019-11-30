import React, { Component } from 'react';
import styled from 'styled-components';
import Head from '../Head'
import { Link } from "react-router-dom";


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
        a{
            color: #fff;
        }
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
        console.log("HEADER", this.props)
        return (
            <div>
                <Header>
                    <LogoWrapper><span className="logo"><Link to="/">Iam,saroj</Link></span></LogoWrapper>
                    <NavListWrapper>
                        <ul>
                            <li><Link  to="/portfolio">PORTFOLIO</Link></li>
                            <li><Link  to="/about">ABOUT</Link></li>
                            <li><Link  to="/contact">CONTACT</Link></li>
                        </ul>
                    </NavListWrapper>

                </Header>
            </div>
        )
    }
}


export default index



