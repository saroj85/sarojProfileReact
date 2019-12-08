import React, { Component } from 'react';
import styled from 'styled-components';
import Head from '../Head'
import { NavLink } from "react-router-dom";
import {withRouter} from 'react-router-dom'

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
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            .sm_text{
                font-size: 11px;
                font-weight: 200;
                letter-spacing: 2px;
                color: #00ffcd;
            }
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
                padding: 12px 16px;
                border-radius: 4px;
                &.active{
                    background:#18bc9c;
                }

            }
        }
    }
`;


class index extends Component {
    state ={
        name: 'saroj'
    }


    test =() =>{
        let {name} = this.state;
        name ="hello";
        console.log("INNER NAME", name)

        return {name}

    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, { passive: true });
        window.addEventListener('screen', this.handleScroll, { passive: true });
        this.test()
        
      }
      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
        window.removeEventListener('screen', this.handleScroll)
      }
      handleScroll = () => {
        this.setState({
          scrollY: window.scrollY
        })
    }

      
    render() {
        return (
            <div>
                <Header>
                    <LogoWrapper><span className="logo"><NavLink to="/"><span>Iam,saroj</span><span className="sm_text">React Js Developer</span></NavLink></span></LogoWrapper>
                    <NavListWrapper>
                        <ul>
                            <li><NavLink to="/" exact={true}>HOME</NavLink></li>
                            <li><NavLink to="/portfolio">PORTFOLIO</NavLink></li>
                            <li><NavLink to="/about">ABOUT</NavLink></li>
                            <li><NavLink to="/contact">CONTACT</NavLink></li>
                        </ul>
                    </NavListWrapper>

                </Header>
            </div>
        )
    }
}

export default withRouter(index);



