import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  margin: 30px auto;

  h1 {
    font-size: 40px;
  }

  h2 {
    margin: 70px auto 30px;
    font-size: 30px;
  }

  p {
    font-size: 17px;
    margin: 15px auto;
  }

  button {
    font-weight: bold;
    font-size: 15px;
    color: white;
    border: 1px solid gray;
    background: var(--primary-color);
    padding: 8px 16px;
    border-radius: 5px;
    cursor: pointer;
    margin: 0 6px 40px 0;
  }

  button:hover {
    filter: saturate(170%);
  }

  a {
    display: flex;
    align-items: center;
    margin: 0 auto;
    justify-content: center;
    margin-top: 24px;
    &:hover {
      color: blue;
    }
  }
`;
