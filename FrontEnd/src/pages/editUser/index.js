import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import api from '../../services/api';
import {useHistory} from 'react-router-dom'
import { Container } from './style';


export default function Edit() {
  const { id } = useParams();
  const [ user, setUser ] = useState([]);
  const [ updateName, setUpdateName ] = useState(user.name);
  const [ updateEmail, setUpdateEmail ] = useState(user.email);
  const [ updatePassword, setUpdatePassword ] = useState(user.password);
  const history = useHistory()
  
  useEffect(()=>{
      const userId = id;
      async function load(){
          const response = await api.get(`user/${userId}`);
          setUser(response.data)
        } 
      load();
  }, []);

  async function handleEditUser(event){
    event.preventDefault()
    const data = {
      name: updateName,
      email: updateEmail,
      password: updatePassword,
    }
    await api.put(`user/${id}`,data);   
    
    history.push('/signup');
  }
  async function handleCancelUser(){
    history.push('/signup');
  }

  return(
    <Container>

      <h1>Edição de <span>Usuário</span></h1>

      <div className="donors">
        <form onSubmit={handleEditUser}>
          
          <label>
            Nome:
            <input 
            defaultValue={user.name}
            onChange={event => setUpdateName(event.target.value)} />
          </label>       
          <label>
            E-mail:
            <input 
            defaultValue={user.email}
            onChange={event => setUpdateEmail(event.target.value)} />
          </label>
          <label>
            Password:
            <input 
            type="password"
            defaultValue={user.password}
            onChange={event => setUpdatePassword(event.target.value)} />
          </label>
          <div className="buttons">
            <button onClick={ event => handleCancelUser() } >Cancelar</button>
            <button type="submit">Enviar</button>
          </div>
        </form>  
      </div>
    </Container>
  );
}