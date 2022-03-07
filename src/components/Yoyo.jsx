import React from 'react'

const Yoyo = (props) => {

    return (
        <div>
            <div>
                <h1 className="title red">Votre nom</h1>
                <img src={props.img} alt="myImage!" />
                <hr />
                <img src="/imageInPublic.jfif" alt="myimage" />
                <hr />
            </div>
        </div>
    );
}

export default Yoyo;