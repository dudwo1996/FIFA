import styled from "styled-components";

export const ContainerBackground = styled.div`
    display: flex;
    display: absolute;
    position: fixed;
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(2px);
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    border-radius: 20px;
    width: 40%;
    background: #eddc81;
`

export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color:  black;
    background-color: #ffffff;
    margin: 20px;
    padding: 10px;
    border-radius: 15px;
    font-weight: 1000;
    `

export const Body = styled.div`
    margin: 20px;
    // background-color: #ffffff;
    border-radius: 15px;
    // border-top: 3px solid #3e3d55;
`
export const HeadOfBodyWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const HeadOfBody = styled.div`
    width: 325px;
    color: #333333;
    font-size: 15px;
    margin: 5px;
    background-color: #ffffff;
    padding: 5px;
    border-radius: 10px;
`

export const BodyOfBody = styled.div`
    width: 325px;
    color: #333333;
    font-size: 15px;
    padding: 5px;
    // border-bottom: 0.5px solid #919199;
`

export const BodyOfBodyWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`


export const Foot = styled.div`
    display: flex;
    justify-content: right;
    align-items: center;
`

export const CloseBtn = styled.div`
    border: 1px solid #3e3d55;
    color: #3e3d55;
    border-radius: 10px;
    margin: 20px;
    padding: 5px;
    :hover{
        cursor: pointer;
    }
`