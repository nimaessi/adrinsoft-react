import * as Icon from 'react-bootstrap-icons';

const Footer = () =>{

    return(
        <div className="container-fluid bg-dark">
            <p className="text-center text-light mt-5">Follow us</p>
            <ul className="list-inline text-center">
                <li className="list-inline-item">
                    <a href="home" className="text-decoration-none text-light fs-3">
                        <Icon.Instagram/>
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="home" className="text-decoration-none text-light fs-3">
                        <Icon.Telegram/>
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="home" className="text-decoration-none text-light fs-3">
                        <Icon.Youtube/>
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="home" className="text-decoration-none text-light fs-3">
                        <Icon.Twitter/>
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="home" className="text-decoration-none text-light fs-3">
                        <Icon.Facebook/>
                    </a>
                </li>
            </ul>


        </div>
    )
}
export default Footer;