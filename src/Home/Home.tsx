import axios from 'axios'
import { useState } from 'react'
import { MyInfo } from '../Article/MyInfo'
import { SquardChart } from '../Aside/LeftBar/SquardChart'
import { UserSearch } from '../Aside/RightBar/UserSearch'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import * as S from './Home.style'
import { matchDataActions } from '../store/slices/matchDataSlice'
import { useDispatch } from 'react-redux'
export const Home = () => {
    const dispatch = useDispatch();
    const [userInfo, setUserInfo] = useState({ nickname: '', level: 0, matchDetail: []});
    const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJYLUFwcC1SYXRlLUxpbWl0IjoiNTAwOjEwIiwiYWNjb3VudF9pZCI6Ijk3MzY5NTkxMCIsImF1dGhfaWQiOiIyIiwiZXhwIjoxNjg5NTU2NTcwLCJpYXQiOjE2NzQwMDQ1NzAsIm5iZiI6MTY3NDAwNDU3MCwic2VydmljZV9pZCI6IjQzMDAxMTQ4MSIsInRva2VuX3R5cGUiOiJBY2Nlc3NUb2tlbiJ9.DtOiyxw1Piwe5xlvEc1EQ164Av7znhXB2pg0Xz3j-gI'
    const userInfoRequest = async (userName: string) => {
        const userInfoRes = await axios.get("https://api.nexon.co.kr/fifaonline4/v1.0/users", {
            headers: { Authorization: apiKey },
            params: {nickname: userName}
        });
        if (userInfoRes.status === 200) {
            const fUMI = await findUserMatchInfo(userInfoRes.data.accessId);
            const fUMD = await findUserMatchDetail(fUMI.data);
            setUserInfo({ nickname: userInfoRes.data.nickname, level: userInfoRes.data.level, matchDetail: fUMD });
            dispatch(matchDataActions.set(fUMD));
        }
    }
        // user의 asseccId를 이용해 매치 정보 조회 하기
        const findUserMatchInfo = (userAccessId: string) => {
            const userMatchRes = axios.get(`https://api.nexon.co.kr/fifaonline4/v1.0/users/${userAccessId}/matches?matchtype=${50}&offset=${0}&limit=${10}`, {
                headers: { Authorization: apiKey }
            });
            return userMatchRes;
        }
    
    // matchInfo의 matchId를 이용해 match Detail을 조회하는 함수
    const findUserMatchDetail = async(matchId: []) => {
        const matchDetailData: any = [];
        for (const match of matchId) {
            const mDD = await axios.get(`https://api.nexon.co.kr/fifaonline4/v1.0/matches/${match}`, { headers: { Authorization: apiKey } });
            matchDetailData.push(mDD.data);
        }
        return matchDetailData;
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