import React, { useContext } from 'react'
import MainContext from '../context/mainContext'
import '../css/login.css'

export default function Login() {
    const mainContext = useContext(MainContext)
    const { saveAdminState, state, login } = mainContext
    const saveToContext = (e) => {
        // console.log('eeeeeeeeeee', e.target.value);
        saveAdminState({ id: e.target.id, value: e.target.value })
    }

    return (
        <div>
            <div className="login-page">
                <div className="form">
                    <h2>Admin</h2>
                    <form className="login-form" noValidate onSubmit={($event) => login($event)}>
                        <input id='username' type="text" placeholder="username" onChange={(e) => saveToContext(e)} required />
                        <input id='password' type="password" placeholder="password" onChange={(e) => saveToContext(e)} required />
                        <button type='submit'>login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
