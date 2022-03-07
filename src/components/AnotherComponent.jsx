import React, { Component } from 'react';
import myImage from '../imageInSrc.jfif';

export class AnotherComponent extends Component {

    render() {
        return (
            <div>
                <img src={myImage} alt="myimage" />
            </div>
        )
    }
}

export default AnotherComponent;