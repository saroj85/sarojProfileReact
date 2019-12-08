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




    // change changeHandler function  

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    // submit click function 

    submitClick = (ev) => {
        if (this.state.name.length <= 2) {
            alert("Please Enter your Full Name")

        }
        else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email)) {
            alert("Please Enter Email")

        }
        else if (this.state.message.length <= 5) {
            alert("Please Enter  Your Message")

        }
        else {
            // const data = {
            //     name: this.state.name,
            //     email: this.state.email,
            //     message: this.state.message
            // }
            // ev.preventDefault();
            // const form = ev.target;
            // const data = new FormData(form);
            // const xhr = new XMLHttpRequest();
            // xhr.open(form.method, form.action);
            // xhr.setRequestHeader("Accept", "application/json");
            // xhr.onreadystatechange = () => {
            //     if (xhr.readyState !== XMLHttpRequest.DONE) return;
            //     if (xhr.status === 200) {
            //         form.reset();
            //         this.setState({ status: "SUCCESS" });
            //     } else {
            //         this.setState({ status: "ERROR" });
            //     }
            // };
            // xhr.send(data);
        
        this.setState({
            name: '',
            email: '',
            message: ''
        })
        alert("Thanks For contacting Me !!")
    }

}


render() {
    return (
        <div>
            <Heading title="contact Me" color="#000" />
            <FromWrapper>  
                {/* <form
                    onSubmit={this.submitClick}
                    action="https://formspree.io/mdokgpgo"
                    method="POST"
                >
                             */}
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
                {/* </form> */}
            </FromWrapper>

        </div>

    )
}
}


export default index;