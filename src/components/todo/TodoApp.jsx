import { useState } from 'react'
import './TodoApp.css'

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <LoginComponent />
            {/* <WelcomeComponent /> */}
        </div>
    )
}



function LoginComponent() {

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
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
        }

        else {
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }
    }


    // Use PascalCase for React component names, so SuccessMessageComponent & ErrorMessageComponent is preferred
    
    function SuccessMessageComponent() {

        if(showSuccessMessage) {
            return <div className="successMessage">Authenticated Successfully</div>
        }
        
        return null   
    }
    
    function ErrorMessageComponent() {
    
        if(showErrorMessage) {
            return <div className="errorMessage">Authentication Failed. Please check your credentials.</div>
        }
        
        return null   
    }


    return (
        <div className="Login">
            <div className="LoginForm">
                <div>
                    <SuccessMessageComponent/>
                    <ErrorMessageComponent/>
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

function WelcomeComponent() {
    return (
        <div className="Welcome">
            Welcome Component
        </div>
    )
}