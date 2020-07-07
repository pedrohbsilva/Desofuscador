import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  display: flex;
  width: 100%;
  margin: 0 auto;
  height: 7vh;
  align-items: center;

  a {
    background: var(--primary-color);
    display: flex;
    color: white;
    width: 10%;
    height: 4vh;
    border-radius: 5px;
    align-items: center;
    font-size: 13px;
    justify-content: center;
  }
`;
