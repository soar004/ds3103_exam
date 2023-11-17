import {Link} from 'react-router-dom';
import homeIcon from '../assets/New_era_F1_logo.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-fixed-top">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto" id="navbarStyle">
                    <li>
                        <Link className="navbar-brand" to="/">
                            <img src={homeIcon} alt="Home" width="110em" className="d-inline-block align-top"/>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/drivers">SEASONS FORMULA 1 DRIVERS AND TEAMS</Link>
                    </li>
                    <li className="nav-item ml-10 p-10">
                        <Link className="nav-link" to="/new-driver">SIGN UP AS A DRIVER</Link>
                    </li>
                    <li className="nav-item ml-10">
                        <Link className="nav-link" to="/quiz">QUIZ</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;