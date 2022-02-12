import Image from 'react-bootstrap/Image'; 
import { Link } from 'react-router-dom';

const NotFound = () => {

    const imgStyle = {
        maxHeight : "220px",
        maxWidth : "220px",

    };

    return(
        <div className="d-flex align-items-center justify-content-center vh-100 overflow-hidden">
            <div className="row">
            <Link className="text-light" to="/">
                <Image 
                style={imgStyle}
                src="/assets/myImages/logo_transparent.png"
                className="fluid mt-5"/>
            </Link>
            </div>
            <div className="row">
                <h1 className="text-light fw-bolder m-3">404</h1>
                <h1 className="text-light fw-bolder">
                    Page Not Found :(
                </h1>
            </div>
        </div>
    )
}
export default NotFound;