import styled from "styled-components";

export const Container = styled.div`
height: 100%;
`

export const Div = styled.div`
margin: 15px;
`

export const Span = styled.span`
font-weight: 850;
`

export const MatchHead = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`

export const dataGuideBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
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
    color: #279a69;
    font-weight: 850;
`

export const MatchDataDiv = styled.div`
    border-top: 3px solid #279a69;
`

export const TableHead = styled.div`
    width: 850px;
    display: flex;
    margin-top: 10px;
`

export const HeadItem = styled.div`
    text-align: center;
    border-radius: 10px;
    padding: 5px;
    margin: 10px;
    width: 140px;
    height: 30px;
    line-height: 30px;
    color: #ffffff;
    font-size: 18px;
    background-color: #c3e0d1;
`

export const TableBody = styled.div`
    display:flex;
    width: 850px;
`
type BodyItemResult = {
    result: string;
};
export const BodyItem = styled.div<BodyItemResult>`

text-align: center;
width: 160px;
height: 40px;
line-height: 40px;
padding: 5px;
margin-top: 10px;
border-bottom: 1px solid #e2e2e6;
color: #919199;
${(props) => (props.result === '승' ? `color: blue;` : props.result === '패'? `color: red;` : `color: #919199;`)}
`

export const Result = styled.span`

`

export const BodyItem2 = styled.div`
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
    width: 300px;
    padding-left: 15px;
`

export const searchBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 1px solid #d4d9e2;
    font-size: 14px;
    height: 34px;
    padding: none;
    margin: none;
    :hover{
        cursor: pointer;
        background-color: #c3e0d1;
    }
    width: 100px;
`

export const GlassessImg = styled.img`
    width: 20px;
    height: 20px;
`
export const questionMargImg = styled.img`
    width: 23px;
    height: 23px;
    margin-left: 3px;
`

export const Loading = styled.img`
margin: 200px
`

export const Form = styled.form`
display: flex;
justify-content: center;
align-items: center;
margin-top: 50px;
`