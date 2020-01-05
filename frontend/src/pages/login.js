import React from 'react';
import './Login.css';

// import logo from '../assets/logo.svg';

export default function Login() {
    return (
            // <img src={logo} atl="Tindev" />
        <div className="login-container">
            <form>
                <h1>LOGO</h1>
                <input placeholder="Digite seu usuário no Github"></input>
                <button type="submit">Enviar</button>

            </form>
        </div>
    );
}