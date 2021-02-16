import React from 'react'
import { Link, Redirect, useHistory } from "react-router-dom";
import { useState } from 'react'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory()

    const handleSubmit = e => {
        e.preventDefault()
        const user = JSON.parse(localStorage.getItem('user'));
        if (user.username === username && user.password === password) {
            history.push('/movies')
        }
        else {
            alert('username or password is incorrect')
        }
    }

    return (
        <div className="main">
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="Username" placeholder="Enter Your Username" onChange={e => setUsername(e.target.value)} required /> <br />
                <input type="password" name="Password" onChange={e => setPassword(e.target.value)} id="" /> <br />
                <button type="submit" className="log-in">Log In</button>
            </form>
            <Link to="/">Sign Up</Link>

        </div>
    )
}

export default Login
