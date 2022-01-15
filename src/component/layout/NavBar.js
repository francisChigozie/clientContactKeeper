import React, { Fragment, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'
import ContactContext from '../../context/contact/contextContext'
import PropTypes from 'prop-types'

const NavBar = ({ title, icon }) => {
    const authContext = useContext(AuthContext);
    const contactContext = useContext(ContactContext);

    let navigate = useNavigate();

    const { isAuthenticated, logout, user } = authContext;
    const { clearContacts } = contactContext;

    const onLogout = () => {
             logout();
             clearContacts();
             navigate('/login');
        //window.location = '/login';
    };

    const authLinks = (
        <Fragment>
            <li>Hello { user && user.name }</li>
            <li>
                <a onClick={onLogout} href='#!'>
                    <i className='fas fa-sign-out-alt'></i>
                    <span className='hide-sm'>Logout</span>
                </a>
            </li>
        </Fragment>
    );

    const guestLinks = (
        <Fragment>
            <li><Link to='/about'>About</Link></li>
                <li><Link to='/register'>Register</Link></li>
                <li><Link to='/login'>Login</Link></li>
        </Fragment>
    );

    return (
        <div className='navbar bg-primary'>
            <h1>
                <i className={icon} /> {title}
            </h1>
            <ul>
                {isAuthenticated ? authLinks : guestLinks}
            </ul>
        </div>
    )
}

NavBar.propTypes = {
   title: PropTypes.string.isRequired,
   icon: PropTypes.string 
}

NavBar.defaultProps = {
    title: 'Contact Keeper',
    icon: 'fas fa-id-card-alt'
}

export default NavBar

/**
 * <li><Link to='/'>Home</Link></li>
 *  useEffect(() => {
             history('/login');
         // eslint-disable-next-line
         }, [])
 */