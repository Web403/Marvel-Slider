import React from 'react';
import "../css/background.css";
import "./imgslider";
import imgslider from './imgslider';

const background = () => {
    return (
        <div className='container'>
            <div className='main'>
                <div className='upper-side'>
                    <h1 id='upper-heading'>CHOOSE<br></br> CHARACTER</h1>
                </div>
                <p>Avengers</p>
            </div>
            <div className='bottom-side'>
                {imgslider()}
            </div>
        </div>
    );
}

export default background;