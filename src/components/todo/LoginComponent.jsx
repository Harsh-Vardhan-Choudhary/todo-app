import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useAuth } from './security/AuthContext'

export default function LoginComponent() {

    const navigate = useNavigate();     //this useNavigate() hook will return us a function to navigate back

    const authContext = useAuth()

    const[username, setUsername] = useState('harsh')

    const[password, setpassword] = useState('')

    const[showErrorMessage, setShowErrorMessage] = useState(false)

    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        setpassword(event.target.value)
    }

    function handleSubmit(event) {

        if(authContext.login(username, password)) {
            navigate(`/welcome/${username}`)
        }

        else {
            setShowErrorMessage(true)
        }
    }

    return (
        <div className="Login">
            <div className="LoginForm">
                <h1>Time to Login!</h1>
                <div>
                    {showErrorMessage && <div className="errorMessage">Authentication Failed. Please check your credentials.</div>}
                    <label>User Name:</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>login</button>
                </div>
            </div>
        </div>
    )
}