import PropTypes from 'prop-types';

function UserGrating(props)
{
    const welcomeMessage =  <h2 className="welcome-message">Welcome {props.username}</h2>
    const logInPrompt = <h2 className="login-promt"> Please log in to continue</h2>
    return(props.isLoggedIn ? welcomeMessage : logInPrompt);
 
}
UserGrating.proptypes = {
    isLoggedIn : PropTypes.bool,
    username: PropTypes.string
}
UserGrating.defaultProps = {
    isLoggedIn : false,
    username: "Guest"
}
export default UserGrating