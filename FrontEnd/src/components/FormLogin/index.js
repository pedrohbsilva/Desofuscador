import React, { useState } from 'react';
import api from '../../services/api';

import './style.css';

export default function FormLogin() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function donate() {
        await api.post('/users', {email, password});
    }

    return (
        <div className="formLogin hideLogin">
            <h2>Login</h2>

            <form onSubmit={donate}>
                <input
                    type="email"
                    placeholder="Seu melhor email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                <input
                    type="password"
                    placeholder="Sua melhor senha"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}