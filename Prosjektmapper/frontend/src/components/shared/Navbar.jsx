import {Link} from 'react-router-dom';
import homeIcon from '../../assets/images/New_era_F1_logo.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light navbar-fixed-top">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={homeIcon} alt="Home" width="110em" className="d-inline-block align-top"/>
                </Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/drivers">SEASONS FORMULA 1 DRIVERS AND TEAMS</Link>
                        </li>
                        <li className="nav-item ml-2">
                            <Link className="nav-link text-white" to="/races">RACES</Link>
                        </li>
                        <li className="nav-item ml-2">
                            <Link className="nav-link text-white" to="/new-driver">SIGN UP AS A DRIVER</Link>
                        </li>
                        <li className="nav-item ml-2">
                            <Link className="nav-link text-white" to="/quiz">QUIZ</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;