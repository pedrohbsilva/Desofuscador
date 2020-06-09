import styled from 'styled-components';

export const Container = styled.div`
    margin: 0;

    h1 {
        
        margin-top: 10%;
        text-align: center;
    }
    
    h1 span {
        color: var(--primary-color);
    }

    .donors {   
        display: grid;
        
        border: 1px solid gray;
        background-color: white;

        padding: 60px 100px 60px 100px;
        margin-top: 10%;
        border-radius: 8px;
    }

    form {
        display: grid;
        grid-template-columns: 1fr;
        
    }
    
    form label {
        width: 100%;
        display: grid;
        color: gray;
    }   

    input{
        margin-top: 10px;
        margin-bottom: 10px;
        color: black;
        background-color: rgb(239, 239, 239);
    }

    .donors .buttons {
        margin-top: 40px;

        display: grid;
        grid-template-columns: 1fr 1fr;

        gap: 5px;
        width: 100%;
    }
    
    button {    
        color: white;    
        background-color: var(--primary-color);
        transition: 400ms;
    }

    button:hover {   
        background-color: green;
    }
`;