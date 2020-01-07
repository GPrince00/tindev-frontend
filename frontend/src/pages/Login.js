import React, { useState} from 'react';
import './Login.css';

import api from '../services/api';

// import logo from '../assets/logo.svg';

export default function Login({ history }) {
    const [username, setUsername]= useState('');
    
    async function handleSubmit(e) {
        e.preventDefault();
     
        const response = await api.post('/devs', {
            username: username,
        });
        
        const { id } = response.data;

        history.push('/main')
    }

    return (
            // <img src={logo} atl="Tindev" />
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <h1>LOGO</h1>
                <input 
                    placeholder="Digite seu usuário no Github"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}