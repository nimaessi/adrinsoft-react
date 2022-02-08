import React from 'react';
import caveat from '../fonts.module.css';

const AdrinComponent = () => {
    const style = {
        background :"#FFFFFF",
    };
    const imgStyle = {
        maxWidth :"220px",
        maxHeight : "220px"

    };

    return(
        <div className="container-fluid p-0 text-center" style={style}> 
        <img 
        className="fluid mt-3"
        alt="Logo Arrinsoft"
        src="../assets/myImages/logo_transparent.png"
        style={imgStyle}/>
        <h1 className={caveat.caveatb}>Whatever you want</h1>
        <br/>
        <p className={caveat.caveatb}> Adrinsoft .....</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff304f" fillOpacity="1" d="M0,96L60,128C120,160,240,224,360,224C480,224,600,160,720,117.3C840,75,960,53,1080,48C1200,43,1320,53,1380,58.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        </div>
    )
}
export default AdrinComponent;