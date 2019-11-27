import React, { Component } from 'react'
import styled from 'styled-components';
import PopUp from '../shared/popUp';
import Heading from '../shared/heading';
import Gap from '../shared/gap';
import { ifError } from 'assert';


const Card = styled.div`
    width: 100%;
    height: 260px;
    position: relative;
    overflow: hidden;
    .hover_card{
        width: 100%;
        height: 100%;
        position: absolute;
        top: ${props => props.hover ? "0px" : "-100%"};
        bottom: 0px;
        right: 0px;
        left: 0px;
        transition: all 0.1s;
        background-color: #18bc9c;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 50px;
        color: #fff;
    }
    img{
        max-width: 100%;
    } 
`;


const SkillWrapper = styled.div`
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    margin: auto;
    .skill{
        border: 1px solid #ccccccd9;
        padding: 5px;
        border-radius: 4px;
        margin: 5px;
        text-transform: uppercase;
        font-size: 13px;
        font-weight: 500;
        background: #f9f9f9;
        cursor: pointer;
    }
`;


const Button = styled.button`
    border: 0px;
    width: 104px;
    height: 40px;
    font-size: 16px;
    background-color: #18bc9c;
    color: #fff;
    border-radius: 4px;
    text-align: center;
    margin: auto;
    cursor: pointer;
    outline: none;
    text-transform: uppercase;
    font-weight: 600;

`;

class portfolioCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
            showPopup: false
        }
    }

    popUpShow = () => {
        this.setState({ showPopup: true })
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = "16px";
    }


    popUpClose = () => {
        this.setState({ showPopup: false })
        document.body.style.overflow = "auto";
        document.body.style.marginRight = "0px";
        document.body.style.margin = "0px";
    }



    render() {
        const { logo, title, bigImage, url, description, skill } = this.props.item;
        console.log("logo", logo)
        return (
            <div>
                <Card
                    hover={this.state.hover}
                    onMouseOut={() => this.setState({ hover: false })}
                    onMouseOver={() => this.setState({ hover: true })}
                >
                    <img src={logo} />
                    <div className="hover_card" onClick={this.popUpShow}><i className="fas fa-search-plus"></i></div>
                </Card>

                <PopUp popUpClose={this.popUpClose} effect={this.state.showPopup} height="max-content" width={"calc(100vw - 100px)"} margin="50px">
                    <div style={{ padding: '10px', position: 'relative' }}>
                        <div className="close" onClick={this.popUpClose}><i className="fas fa-times"></i></div>
                        <Heading title={title} color="#000" />
                        <Gap h="20px" />
                        <img src={bigImage} style={{ maxWidth: '70%', border: '4px solid #09d3ac', borderRadius: '3px' }} />
                        {/* <iframe width="70%" height="400px" src={url}></iframe> */}
                        <Gap h="20px" />
                        <p style={{ fontSize: '21px', fontWeight: '500' }}>{description}</p>
                        <Gap h="20px" />
                        <SkillWrapper>
                            {skill && skill.map((item, index) => {
                                return (
                                    <div className="skill" key={index}>{item}</div>
                                )
                            })}

                        </SkillWrapper>
                        <Gap h="50px" />
                        <Button onClick={this.popUpClose}>Close</Button>
                        <Gap h="50px" />
                    </div>
                </PopUp>

            </div>
        )
    }
}


export default portfolioCard;
