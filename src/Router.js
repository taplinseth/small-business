import React from 'react'
import { Routes, Route, Navigate} from 'react-router'
import cookie from 'cookie'
import Login from './containers/Login'
import Portal from './containers/Portal'
import Details from './containers/Details'
import Add from './containers/Add'

const isAuthenticated = () => {
    return cookie.parse(document.cookie).loggedIn
}

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={ props => isAuthenticated() ?
            <Component {...props} /> :
            <Navigate to='/' />
        } />
    )
}

const Router = () => {
    return (
        <Routes>
            <Route exact path='/' element={Portal} />
            <Route path='/login' element={Login} />
            <Route path='/details/:id' element={Details} />
            <Route path='/add' element={Add} />
        </Routes>
    )
}

export default Router