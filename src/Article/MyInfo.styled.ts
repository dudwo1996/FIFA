import styled from "styled-components";

export const Container = styled.div`
height: 100%;
`

export const Div = styled.div`
`

export const MatchHead = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;
`

export const dataGuideBtn = styled.button`
    width: 150px;
    height: 42px;   
    border: 1px solid #dbdee5;
    box-sizing: border-box;
    line-height: 42px;
    padding: 0 16px;
    font-size: 14px;
    color: #a6a6b6;
    margin-right: 10px;
    position: relative;
    background-color: white;
    :hover{
        cursor: pointer;
        text-decoration: none;
    }
`

export const TitleString = styled.div`
    padding: 0 16px;
    font-size: 25px;
    color: rgb(20, 20, 50);
    font-weight: 520;
`

export const MatchDataDiv = styled.div`
    border-top: 10px solid #3e3d55;
`

export const TableHead = styled.div`
    width: 850px;
    display: flex;
`

export const HeadItem = styled.div`
    text-align: center;
    border-bottom: 2px solid #3e3d55;
    padding: 5px;
    margin: 10px;
    width: 140px;
    height: 30px;
    color: #7a7984;
    font-size: 18px;
`

export const TableBody = styled.div`
    display:flex;
    width: 850px;
`

export const BodyItem = styled.div`
    text-align: center;
    width: 140px;
    height: 40px;
    padding: 5px;
    margin: 10px;
    border-bottom: 1px solid #e2e2e6;
    color: #919199;
`

export const DetailButton = styled.button`
    background-color: white;
    border: 1px solid #d4d9e2;
    margin: 0 10px;
    font-size: 14px;
    color: #7a7984;
    width: 70px;
    height: 30px;
    display: inline-block;
    box-sizing: border-box;
    :hover{
        cursor: pointer;
    }
`

export const userNameInput = styled.input`
        background-color: white;
    border: 1px solid #d4d9e2;
    height: 30px;
`

export const searchBtn = styled.button`
    background-color: white;
    border: 1px solid #d4d9e2;
    font-size: 14px;
    height: 34px;
    padding: none;
    margin: none;
    :hover{
        cursor: pointer;
    }
`