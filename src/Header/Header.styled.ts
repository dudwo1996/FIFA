import styled, { keyframes } from "styled-components";

export const shake = keyframes`
0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(-0.5rem, 0);
  }
  70% {
    transform: translate(0.5rem, 0);
  }
  100% {
    transform: translate(0, 0);
  }
`
export const Container = styled.div`
    background-color: #3e7d55;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    animation: ${shake} 200ms 2;
`

export const Image = styled.img`
    height: 85px;
    margin: 10px;
    :hover {
        cursor: pointer;
    }
`