import Button from 'react-bootstrap/Button';
import * as Icon from 'react-bootstrap-icons';
import Image from 'react-bootstrap/Image';

const Header = () => {
    const imgStyle = {
        maxHeight : "320px",
        maxWidth : "320px",

    };

    return(
        <div className="container-fluid p-0 text-center overflow-auto">
            <Image 
            className="fluid" 
            style={imgStyle} 
            src="../../assets/myImages/developer.png" 
            alt="Developer"/>
            <h1 className="display-5 fw-bolder text-light text-center mt-2">Hi, I am 
                <span className="text-danger ms-2">Omid Naserian.</span>
            </h1>
            <h5 className="text-center text-light mt-3">A Front End Designer.</h5>
            <p className="text-center text-light mt-5 w-50 mx-auto">Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.</p>
            <Button variant="outline-primary">Resume</Button>
            <a 
            href="http://www.adrinsoft.ir" 
            target="_blank"
            rel="noopener noreferrer">
                <Icon.Github 
                className="text-light m-3" 
                size="35"/>
             </a>
            <a 
            href="http://www.adrinsoft.ir" 
            target="_blank"
            rel="noopener noreferrer">
                <Icon.Linkedin 
                className="text-light m-1" 
                size="35"/>
             </a>
        </div>
    )
}
export default Header;