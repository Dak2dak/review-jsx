import React, { Component } from 'react';
import myImage from '../imageInSrc.jfif';

class AnotherComponent extends Component {

    render() {
        return (
            <div>
                <img src={myImage} alt="myimage" />
                <hr />
                <img src="/imageInPublic.jfif" alt="myimage" />
            </div>
        )
    }
}

export default AnotherComponent;