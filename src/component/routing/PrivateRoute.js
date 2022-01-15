import React, { useContext } from 'react'
import { useNavigate,Route } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext'

const PrivateRoute = ({ component: Component, ...rest }) => {
    const authContext = useContext(AuthContext);
    let navigate = useNavigate();

    const { isAuthenticated, loading } = authContext;
    return (
        <Route { ...rest } render={props => !isAuthenticated && !loading ? (
            navigate('/login')) : (
                <Component {...props}/>
            )}/>
    );
   
}

export default PrivateRoute

/**
 *  return (
        <Route { ...rest } render={props => !isAuthenticated && !loading ? (
            <Redirect to='/login'/>) : (
                <Component {...props}/>
            )}/>
    );

             useEffect(() => {
        if(!isAuthenticated && !loading ) {
                 history("/login") 
        }
        // eslint-disable-next-line
    }, [])
 */
