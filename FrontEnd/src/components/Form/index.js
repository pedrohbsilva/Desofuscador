import React, { useState } from 'react';
import api from '../../services/api';

import './style.css';

export default function Form() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function donate(event) {
        await api.post('/users', { name, email, password});
    }

    return (
        <div className="form hide">
            <h2>Cadastre-se conosco</h2>

            <form onSubmit={donate}>
                <input
                    type="text"
                    placeholder="Informe seu nome"
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
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