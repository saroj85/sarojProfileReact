import React, { Component } from 'react'



var num = [2, 5, 7, 8];
var newNum = [];

export default class c extends Component {
    constructor(props) {
        super(props);

        console.log("i am c component constructor")
    }


    

    getnewnum = () => {
        // for (let j = 0; j < num.length; j++) {
            // for (let i = 0; i <= 10; i++) {
            //     // var index = num[i];
            //     if(num.indexOf(i) == -1){
            //        newNum.push(i);
            //     }
            // }
        // }
        console.log("missing Number" , newNum)
    }

    componentDidMount() {
        console.log("i am C Component ComponentDidMount");
        this.getnewnum()
    }



    render() {
        console.log("i am c component Render")
        return (
            <div>
                i am c
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}
