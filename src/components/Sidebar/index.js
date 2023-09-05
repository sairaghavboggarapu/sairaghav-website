import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubttile from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faBlogger, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => (

    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img className="sub-logo" src={LogoSubttile} alt="solobodan" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a traget="_blank" rel="noreferrer" href='https://www.linkedin.com/in/boggarapu-sai-raghav-42815a227' >
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />

                </a>
            </li>
            <li>
                <a traget="_blank" rel="noreferrer" href='https://github.com/sairaghavboggarapu/' >
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />

                </a>
            </li>
            <li>
                <a traget="_blank" rel="noreferrer" href='https://sairaghavboggarapu.blogspot.com' >
                    <FontAwesomeIcon icon={faBlogger} color='#4d4d4e' />

                </a>
            </li>

        </ul>

    </div>
)


export default Sidebar;