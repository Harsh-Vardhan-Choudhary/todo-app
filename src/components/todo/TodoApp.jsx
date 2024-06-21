import './TodoApp.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HeaderComponent from './HeaderComponent'
import LoginComponent from './LoginComponent'
import LogoutComponent from './LogoutComponent'
import WelcomeComponent from './WelcomeComponent'
import ListTodoComponent from './ListToDoComponent'
import FooterComponent from './FooterComponent'
import ErrorComponent from './ErrorComponent'

import AuthProvider from './security/AuthContext'

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <BrowserRouter>
            <AuthProvider>
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
            </AuthProvider>
            </BrowserRouter>
        </div>
    )
}
