import React, { Component } from 'react';
import B from './b';

export default class a extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'new saroj kumar'
        }

    console.log("i am a Component Constructor")
    }


    componentDidMount() {
        console.log("i am a Component ComponentDidMount")
    }


    static getDerivedStateFromProps(props, state) {
        console.log("I  am A component GetDerivedDtateFromProps")
        return { name: props.name }

    }


    render() {
        console.log("i am a Component Render")
        return (
            <div>
               <p> i am a  {this.state.name}</p>
                <B name={this.props.name} />
            </div>
        )
    }
}
