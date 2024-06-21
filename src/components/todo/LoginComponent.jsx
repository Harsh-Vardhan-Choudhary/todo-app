import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useAuth } from './security/AuthContext'

export default function LoginComponent() {

    const navigate = useNavigate();     //this useNavigate() hook will return us a function to navigate back

    const authContext = useAuth()

    const[username, setUsername] = useState('harsh')

    const[password, setpassword] = useState('')

    const[showSuccessMessage, setShowSuccessMessage] = useState(false)

    const[showErrorMessage, setShowErrorMessage] = useState(false)

    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        setpassword(event.target.value)
    }

    function handleSubmit(event) {

        if(username==='harsh' && password==='dummy') {
            authContext.setAuthenticated(true)
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
            navigate(`/welcome/${username}`)
        }

        else {
            authContext.setAuthenticated(false)
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }
    }


    // Use PascalCase for React component names, so SuccessMessageComponent & ErrorMessageComponent is preferred
    
    // function SuccessMessageComponent() {

    //     if(showSuccessMessage) {
    //         return <div className="successMessage">Authenticated Successfully</div>
    //     }
        
    //     return null   
    // }
    
    // function ErrorMessageComponent() {
    
    //     if(showErrorMessage) {
    //         return <div className="errorMessage">Authentication Failed. Please check your credentials.</div>
    //     }
        
    //     return null   
    // }


    return (
        <div className="Login">
            <div className="LoginForm">
                <h1>Time to Login!</h1>
                <div>

                    {/* <SuccessMessageComponent/>
                    <ErrorMessageComponent/> */}

                    {showSuccessMessage && <div className="successMessage">Authenticated Successfully</div>}
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