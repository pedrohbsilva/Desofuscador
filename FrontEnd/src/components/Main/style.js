import styled from 'styled-components';

export const Container = styled.div`
    text-align: center;
    margin: 0;

    h2{
        margin-bottom: 70px;
        font-size: 30px;
    }

    span{
        color: var(--primary-color);
    }

    input{
        background-color: blue;
    }

    .donors{
        display: grid;
        grid-template-columns: 1fr 1fr;  
        gap: 16px;      
    }

    .donor{
        display: grid;
        grid-template-columns: 1fr;

        border-radius: 8px;
        background-color: #eee;
        display: grid;
        padding: 1em;
        width: 300px;
        height: 180px;
        
        text-align: left;
    }
    
    .donor button{
        height: 0;
        width: 0;
        border: none;
        cursor: pointer;
        margin-right: 20px;
        color: #a8a8b3;
        font-size: 20px; 
    }

    .donor .icons-cards {
        height: 25px;
        text-align: right;
        position: relative;
    }

    .donor .icons-cards .icon-edit {
        color: #a8a8b3;
        font-size: 20px; 
        margin-right: 10px;
    }

    .donor button:hover {
        color: #969696;
    }

    .donor .icon-edit:hover {
        color: #969696;
    }

    .info-user {
        margin-top: -18%;
        display: grid;
        align-items: center;
    }

    .info-user p {
        display: flex;
        align-items: center;
        padding: 5px 0 5px;
    }

    .info-user div {
        display: flex;
        align-items: center;
        padding: 5px 0 5px;
    }

    .info-user span {
        border-top: 1px solid #d4d4d4;
    }

    .icon {
        margin-right: 10px;
        color: #a8a8b3;
    }
`;