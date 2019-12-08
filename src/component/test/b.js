import React, { Component } from 'react'
import C from './c';

export default class b extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
        console.log("I am B component constructor")
    }

    componentDidMount(){
        console.log("i am B Component ComponentDidMount")
    }
    
    render() {
        console.log("I am B component Render")
        return (
            <div>
                i am b
                <C name={this.props.name}/>
            </div>
        )
    }
}
