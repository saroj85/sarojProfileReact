import React, { Component } from 'react'
import styled from 'styled-components';


const Heading = styled.h1`
    font-size: 45px;
    color: ${props => props.color || "#fff"};
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
    /* border-bottom: 2px solid #ccc; */
    padding-bottom: 10px;
    .border_bottom{
        display: block;
        width: 105px;
        height: 2px;
        background: ${props => props.color || '#fff'};
        margin: auto;
    }
`;

 class heading extends Component {
    render() {
        return (
            <div>
                <Heading color={this.props.color}>
                    {this.props.title}
                    <span className="border_bottom"></span>
                </Heading>
            </div>
        )
    }
}


export default heading;
