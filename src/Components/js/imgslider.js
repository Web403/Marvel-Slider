import React from 'react';
import irman from "../../../public/assets/IRman.png"
import captainamerica from "../../../public/assets/capam.png"
import spman from "../../../public/assets/spman.png"
import hulk from "../../../public/assets/hulk.png"
import drstrange from "../../../public/assets/drstrange.png"
import "../css/images.css"


const imgslider = () =>{
    return(
        <div className='slider'>
            <a className='images' href='/'><img src={irman}></img></a>
            <a className='images' href='/'><img src={captainamerica}></img></a>
            <a className='images' href='/'><img src={hulk}></img></a>
            <a className='images' href='/'><img src={drstrange}></img></a>
            <a className='images' href='/'><img src={spman}></img></a>
        </div>
    );
}

export default imgslider;