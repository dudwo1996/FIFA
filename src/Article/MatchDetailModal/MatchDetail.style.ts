import styled from "styled-components";

export const ContainerBackground = styled.div`
display: flex;
    display: absolute;
    position: fixed;
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(1px);
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    border: 1px solid black;
    width: 50%;
    height: 50%;
    background-color: aqua;
`

export const Header = styled.div`
    height: 30%;
    `

export const Body = styled.div`
height: 60%;

`
export const HeadOfBodyWrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
border-top: 10px solid black;
`
export const HeadOfBody = styled.div`
border-bottom: 1px solid black;
margin: 10px;

`

export const BodyOfBody = styled.div`

`

export const BodyOfBodyWrap = styled.div`
`

export const Foot = styled.div`
display: flex;
height: 10%;
justify-content: right;
align-items: center;
`

export const CloseBtn = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    margin: 20px;
    padding: 5px;
    :hover{
        cursor: pointer;
    }
`