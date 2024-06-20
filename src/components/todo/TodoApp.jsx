import { useState } from 'react'
import './TodoApp.css'

import {BrowserRouter, Routes, Route, useNavigate, useParams, Link} from 'react-router-dom'

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <BrowserRouter>
            <HeaderComponent/>
                <Routes>
                    <Route path='/' element={<LoginComponent/>} /> 
                    <Route path='/login' element={<LoginComponent/>} /> 
                    <Route path='/welcome/:username' element={<WelcomeComponent/>} /> 
                    <Route path='/todos' element={<ListTodoComponent/>} /> 
                    <Route path='*' element={<ErrorComponent/>} /> 
                    <Route path='/logout' element={<LogoutComponent/>} /> 
                </Routes>
            <FooterComponent/>
            </BrowserRouter>
        </div>
    )
}


function LoginComponent() {

    const navigate = useNavigate();     //this useNavigate() hook will return us a function to navigate back

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
            navigate(`/welcome/${username}`)
        }

        else {
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

function WelcomeComponent() {

    const params = useParams()      //here it will return an object
    const {username} = useParams()
    return (
        <div className="Welcome">
            <h1>Welcome {username}</h1>
            <div>
                Welcome Component
                {/* Your todos - <a href="/todos"> Go </a> */}
                Your todos - <Link to= "/todos"> Go </Link>
            </div>
        </div>
    )
}

function ErrorComponent() {
    return (
        <div className="ErrorComponent">
            <h2>We are working really hard</h2>
            <div>
                Apoligies for 404. Reach out to our team at ABc_DEF-GHIJ
            </div>
        </div>
    )
}

function ListTodoComponent() {

    const today = new Date()
    const targetDate = new Date(today.getFullYear()+2, today.getMonth(), today.getDay())

    const todos = [
        {id : 1, description : 'Learn AWS', done : false, targetDate : targetDate}, 
        {id : 2, description : 'Learn Full Stack', done : false, targetDate : targetDate}, 
        {id : 3, description : 'Learn Devops', done : false, targetDate : targetDate}
    ]

    return (
        <div className="container">
            <h1>Things you want to do</h1>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Description</td>
                            <td>Is Done?</td>
                            <td>Target Date</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        todos.map
                        (
                            todo => 
                            ( 
                                //React Warning: Each child in a list should have a unique "key" prop.
                                <tr key = {todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toDateString()}</td>
                                </tr>
                            )
                        )
                    }
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

function HeaderComponent() {
    return (
        <header className="border-bottom border-light border-5 mb-5 p-2">
        <div className="container">
            <div className="row">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://www.linkedin.com/in/harsh-vardhan-choudhary-19b24b220/">Harsh</a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5"><Link className="nav-link" to="/welcome/harsh">Home</Link></li>
                            <li className="nav-item fs-5"><Link className="nav-link" to="/todos">Todos</Link></li>
                        </ul>
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item fs-5"><Link className="nav-link" to="/login">Login</Link></li>
                        <li className="nav-item fs-5"><Link className="nav-link" to="/logout">Logout</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    )
}

function FooterComponent() {
    return (
        <footer className="footer">
            <div className="container">
                Your footer
            </div>
        </footer>
    )
}

function LogoutComponent() {
    return (
        <div className="logout">
            <h1>You are logged out</h1>
            <div>
                Thank you for using our app. Come back soon...
            </div>
        </div>
    )
}