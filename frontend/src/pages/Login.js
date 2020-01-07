import React, { useState} from 'react';
import './Login.css';

// import logo from '../assets/logo.svg';

export default function Login({ history }) {
    
    async function handleSubmit(e) {
        e.preventDefault();
     

        history.push('/main')
    }

    return (
            // <img src={logo} atl="Tindev" />
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <h1>LOGO</h1>
                <input placeholder="Digite seu usuário no Github"/>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}