import React, { useState } from 'react'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { UserSearch } from '../Aside/RightBar/UserSearch'
import * as S from './Home.style'
import { SquardChart } from '../Aside/LeftBar/SquardChart'
import { MyInfo } from '../Article/MyInfo'
import axios from 'axios';
export const Home = () => {

    const [userInfo, setUserInfo] = useState({ nickname: '', level: 0, asseccId: ''})

    const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJYLUFwcC1SYXRlLUxpbWl0IjoiNTAwOjEwIiwiYWNjb3VudF9pZCI6Ijk3MzY5NTkxMCIsImF1dGhfaWQiOiIyIiwiZXhwIjoxNjg5NTU2NTcwLCJpYXQiOjE2NzQwMDQ1NzAsIm5iZiI6MTY3NDAwNDU3MCwic2VydmljZV9pZCI6IjQzMDAxMTQ4MSIsInRva2VuX3R5cGUiOiJBY2Nlc3NUb2tlbiJ9.DtOiyxw1Piwe5xlvEc1EQ164Av7znhXB2pg0Xz3j-gI'
    const userInfoRequest = async (userName: string) => {
        const userInfoRes = await axios.get("https://api.nexon.co.kr/fifaonline4/v1.0/users", {
            headers: { Authorization: apiKey },
            params: {nickname: userName}
        });
        if (userInfoRes.status === 200)
            setUserInfo({ nickname: userInfoRes.data.nickname, level: userInfoRes.data.level, asseccId: userInfoRes.data.accessId});            
        }


    return (
        <S.ContainerWrap>
            <S.Header>
                <Header />
            </S.Header>
            <S.ContainerMain>
                <S.SideBarLeft>
                    <SquardChart />
                </S.SideBarLeft>
                <S.Main>
                    <S.Article>
                        <MyInfo userInfo={userInfo} />
                    </S.Article>
                </S.Main>
                <S.SideBarRight>
                    <UserSearch userInfoRequest={userInfoRequest} />
                </S.SideBarRight>
            </S.ContainerMain>
            <S.Footer>
                <Footer />
            </S.Footer>
        </S.ContainerWrap>
    )
}