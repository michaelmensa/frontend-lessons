import React from 'react';
import '../Login/Login.css';

function Login() {
    return (
        <>
        <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label>Email: 
          <input for="email" type="email"></input>
        </label>
        <label>Password: 
          <input for="password" type="password"></input>
        </label>
        <button>OK</button>
        </div>
        </>
    );
}

export default Login;