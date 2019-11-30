import React, { Component } from 'react'
import ContactFrom from '../component/contact';
import Gap from '../component/shared/gap';
import {Column, Row} from '../component/shared/grid';



export default class contact extends Component {
    render() {
        return (
            <div>
                <Gap h="40px" />
             
                <Row alignItems="start">
                    <Column sm="8">
                    <ContactFrom />
                    </Column>
                    <Column sm="4" margin="0px">
                    <p>For any enquery mail to: send4saroj@gmail.com</p>

                    </Column>
                </Row>

                
            </div>
        )
    }
}
