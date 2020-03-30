import React from 'react'
import PropTypes from 'prop-types'


const Login = (props) => (
    <nav className="login">
    <h2>Inventory Login</h2>
    <p>Please log in to view and manage Inventory</p>
    <button 
        className='github' 
        onClick={() => props.authenticate('Github')}>Log In With Gihub</button>
   </nav>

)

Login.propsTypes ={
    authenticate: PropTypes.func.isRequired
}
   


export default Login