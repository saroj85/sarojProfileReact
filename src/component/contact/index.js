import React, { Component } from 'react';
import styled from 'styled-components';
import Gap from '../shared/gap';
import Heading from '../shared/heading';
import PopUp from '../shared/popUp';



const FromWrapper = styled.div`
    width: 600px;
    margin: auto;
    text-align: left;

    textarea{
        width: 100%;
        padding: 6px 0px;
        height: 100px;
        font-size: 14px;
        font-weight: 500;
        color: #000;
        border: 0px;
        border-bottom: 1px solid #ccccccb5;
        outline: none;
        resize: none;
        font-weight: 600;
    }

    .send{
        font-size: 18px;
        height: 66px;
        line-height: 66px;
        font-weight: 500;
        text-align: center;
        width: 103px;
        outline: none;
        border: 1px solid #18bc9c;
        background-color: #18bc9c;
        color: #fff;
        border-radius: 4px;
        cursor: pointer;
        font-family: 'Asap', sans-serif;
        &:hover{
            opacity: 0.7;
        }
    }

    .error_msg{
        color: red;
        font-size: 12px;
    }

`;

const Input = styled.input`
    width: 100%;
    padding: 6px 0px;
    height: 45px;
    line-height: 45px;
    font-size: 14px;
    font-weight: 500;
    color: #000;
    border: 0px;
    border-bottom: 1px solid #ccccccb5;
    outline: none;
    font-weight: 600;
`;




class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            name: "",
            email: "",
            message: "",

        }
    }




    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        }, console.log("hey", this.state))

    }

    submitClick = () => {
         if(this.state.name.length <=2){
                alert("Please Enter your Full Name")
                return false
            }
            if(!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email)){
                alert("enter Email")
                return false
            }
            if(this.state.message.length <= 5){
                alert("enter Message")
                return false
            }
    }


 

    // // submit btn click check validation 

    //     submitClick = () => {

    //         // name 
    //         if (this.state.name.length < 3) {
    //             this.setState({
    //                 nameError: true,
    //                 errorMessage: '** please Enter Your Full Name **'
    //             })
    //         }

    //         // email 
    //         if (this.state.email < 3 && !/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email)) {
    //             this.setState({
    //                 EmailError: true,
    //                 errorMessage: '** please Enter Valid Email Address **'
    //             })
    //         }

    //         if (this.state.message < 8) {
    //             this.setState({
    //                 messageError: true,
    //                 errorMessage: '** please Enter your Message **'
    //             })
    //         }
    //         else{
    //             this.setState({
    //                 EmailError: false,
    //                 nameError: false,
    //                 messageError: false,
    //                 errorMessage: false
    //             } , () => {
    //                 alert("Thanks for contacting me !!")
    //             })


    //         }

    //         // document.body.style.overflow = "hidden";
    //         // document.body.style.marginRight = "16px";
    //     }







    render() {
        return (
            <div>
                <Heading title="contact Me" color="#000" />
                <FromWrapper>
                    <Input type="text" name="name" value={this.state.name} placeholder="Full Name" onChange={this.changeHandler} />
                    {this.state.nameError && <p className="error_msg">{this.state.errorMessage}</p>}
                    <Gap h="10px" />
                    <Input type="text" name="email" value={this.state.email} placeholder="Email" onChange={this.changeHandler} />
                    {this.state.EmailError && <p className="error_msg">{this.state.errorMessage}</p>}
                    <Gap h="10px" />
                    <textarea type="text" name="message" value={this.state.message} placeholder="Message" onChange={this.changeHandler} />
                    {this.state.messageError && <p className="error_msg">{this.state.errorMessage}</p>}
                    <Gap h="10px" />
                    <button className="send" onClick={this.submitClick}>Send</button>
                    <Gap h="100px" />
                </FromWrapper>

            </div>

        )
    }
}


export default index;