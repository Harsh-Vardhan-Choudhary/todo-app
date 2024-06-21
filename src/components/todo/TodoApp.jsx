import './TodoApp.css'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import HeaderComponent from './HeaderComponent'
import LoginComponent from './LoginComponent'
import LogoutComponent from './LogoutComponent'
import WelcomeComponent from './WelcomeComponent'
import ListTodoComponent from './ListToDoComponent'
import FooterComponent from './FooterComponent'
import ErrorComponent from './ErrorComponent'

import AuthProvider, { useAuth } from './security/AuthContext'

function AuthenticatedRoute({children}) {
    const authContext = useAuth()
    if(authContext.isAuthenticated) {
        return children
    }

    return <Navigate to="/" />
}

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <BrowserRouter>
            <AuthProvider>
                <HeaderComponent/>
                    <Routes>
                        <Route path='/' element={<LoginComponent/>} /> 
                        <Route path='/login' element={<LoginComponent/>} /> 

                        <Route path='/welcome/:username' element={
                            <AuthenticatedRoute>
                                <WelcomeComponent/>
                            </AuthenticatedRoute>} /> 

                        <Route path='/todos' element={
                            <AuthenticatedRoute>
                                <ListTodoComponent/>
                            </AuthenticatedRoute>} /> 

                        <Route path='*' element={<ErrorComponent/>} />

                        <Route path='/logout' element={
                            <AuthenticatedRoute>
                                <LogoutComponent/>
                            </AuthenticatedRoute>} /> 
                    </Routes>
                <FooterComponent/>
            </AuthProvider>
            </BrowserRouter>
        </div>
    )
}
