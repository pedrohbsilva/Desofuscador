import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Container } from './style';
import { Link } from 'react-router-dom';
import { FaRegEdit } from 'react-icons/fa';
import { MdLockOutline } from "react-icons/md";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { FiTrash2 } from "react-icons/fi";

export default function Main() {
  const [users, setUser] = useState([]);

  const [open, setOpen] = React.useState(false);
  const [id, setId] = React.useState();

  const handleClickOpen = (id) => {
    setOpen(true);
    setId(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    async function load() {
      const response = await api.get("/users");
      setUser(response.data.users);
    }
    load();
  }, []);

  async function handleDeleteUser(id) {
    try {
      await api.delete(`/users/${id}`);

      setUser(users.filter((user) => user.id !== id));
      setOpen(false);
    } catch (err) {
      alert("Erro ao deletar o incidente");
      setOpen(false);
    }
  }
    let i = 0;
    return (
      <Container>
        <h2>Lista de usuários <span>cadastrados</span></h2>
        <div className="donors">
          {users.map(user => (i++,
            <div key={user.id} className="donor" style={i % 2 === 0 ? { background: '#F9F9F9' } : { background: '#eee' }}>
              <div>
                <p>{user.name}</p>
              </div>
              <div>
                <p>{user.email}</p>
              </div>
              <div className="icons-cards">
                <Link className="icon-edit cor1" to={`/Profile/${user.id}`}>
                  <FaRegEdit />
                </Link>
                <Link className="icon-edit cor2" to={`/EditPassword/${user.id}`}>
                  <MdLockOutline />
                </Link>
                <button variant="outlined" onClick={() => handleClickOpen(user.id)}>
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
                    <Button onClick={() => handleDeleteUser(id)} color="primary" autoFocus>
                      Sim
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            </div>
          ))}
        </div>      
    </Container >
    );
}