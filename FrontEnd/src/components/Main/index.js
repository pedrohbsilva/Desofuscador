import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { FaRegEdit } from 'react-icons/fa';
import { Container } from './style';
import { Link } from 'react-router-dom';

import { FiUser } from 'react-icons/fi';
import { RiMailSendLine } from "react-icons/ri";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { FiTrash2 } from 'react-icons/fi';


export default function Main() {

    const [users, setUser] = useState([]);

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    useEffect(() => {
        async function load() {
            const response = await api.get('/users');
            setUser(response.data);
        }
        load();
    }, []);

    async function handleDeleteUser(id) {

        try {
            await api.delete(`/users/${id}`);

            setUser(users.filter(user => user.id !== id));
            setOpen(false);
        } catch (err) {
            alert('Erro ao deletar o incidente')
            setOpen(false);
        }
    }

    return (
        <Container>
            <h2>Lista de usuários <span>cadastrados</span></h2>

            <div className="donors">
                {users.map(user => (
                    <div key={user.id} className="donor">

                        <div className="icons-cards">
                            <Link className="icon-edit" to={`/Edit/${user.id}`}>
                                <FaRegEdit />
                            </Link>


                            <button variant="outlined" onClick={handleClickOpen}>
                                <FiTrash2 />
                            </button>

                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">{"Atenção!"}</DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        Você tem certeza que quer deletar este usuário?
                                        </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose} color="primary">
                                        Não
                                    </Button>
                                    <Button onClick={() => handleDeleteUser(user.id)} color="primary" autoFocus>
                                        Sim
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </div>

                        <div className="info-user">
                            <span></span>
                            <p><FiUser className="icon" /> {user.name}</p>
                            <span></span>
                            <div><RiMailSendLine className="icon" /> {user.email}</div>
                            <span></span>
                        </div>

                    </div>
                ))}
            </div>

        </Container>
    );
}