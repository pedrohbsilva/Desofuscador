import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import api from '../../services/api';
import {useHistory} from 'react-router-dom'
import { Container } from './style';


export default function EditPassword() {
  const { id } = useParams();
  const [ user, setUser ] = useState([]);
  const [ updatePassword, setUpdatePassword ] = useState();
  const history = useHistory()
    
  useEffect(()=>{
      const userId = id;
      async function load(){
          const response = await api.get(`user/${userId}`);
          setUser(response.data.user)
        } 
      load();
  }, [id]);

  async function handleEditPassword(event){
    event.preventDefault()
    const data = {
      password: updatePassword,
    }
    await api.put(`user/password/${id}`,data);   
    history.push('/userList');
  }
  async function handleCancel(){
    history.push('/userList');
  }

  return(
    <Container>

      <h1>Edição de <span>Senha</span></h1>

      <div className="donors">
        <form onSubmit={handleEditPassword}>
          
          <label className='name'>
            Nome: <b>{user.name}</b>  
          </label> 
          <label>
            Senha:
            <input
            value={updatePassword}
            type="password"
            onChange={event => setUpdatePassword(event.target.value)} />
          </label>
          <div className="buttons">
            <button onClick={ event => handleCancel() } >Cancelar</button>
            <button type="submit">Enviar</button>
          </div>
        </form>  
      </div>
    </Container>
  );
}