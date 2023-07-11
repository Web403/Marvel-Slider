import React from 'react';
import "../css/background.css";
import "./imgslider";
import imgslider from './imgslider';
import {AiOutlineArrowRight} from 'react-icons/ai'

const background = () => {
    return (
        <div className='container'>
            <div className='main'>
                <div className='upper-side'>
                    <h1 id='upper-heading'>MARVEL<br></br> CHARACTER</h1>
                </div>
                <p>Avengers</p>
            </div>
            <div className='bottom-side'>
                {imgslider()}
            </div>
            <div id='footer'>
            <h3 id='footer-text'>SLIDE RIGHT</h3>
            <AiOutlineArrowRight id='icon'/>
            </div>
        </div>
    );
}

export default background;