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
import { ModalPlacer } from '../ModalPlacer'
export const Home = () => {
    const dispatch = useDispatch();
    const [userInfo, setUserInfo] = useState({ nickname: '', level: 0, matchDetail: [] });
    const [isLoding, setIsLoading] = useState(false);
    const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJYLUFwcC1SYXRlLUxpbWl0IjoiNTAwOjEwIiwiYWNjb3VudF9pZCI6Ijk3MzY5NTkxMCIsImF1dGhfaWQiOiIyIiwiZXhwIjoxNzA4ODM2MjI1LCJpYXQiOjE2OTMyODQyMjUsIm5iZiI6MTY5MzI4NDIyNSwic2VydmljZV9pZCI6IjQzMDAxMTQ4MSIsInRva2VuX3R5cGUiOiJBY2Nlc3NUb2tlbiJ9.CVQQbWUDhfSubSDEUtBeGdDTNmSmdWlDp5uKwIDqkao'
    const userInfoRequest = async (userName: string, matchType: number) => {
        try {
            if (userName.length === 0) {
                alert("유저명을 입력해주세요.");
                return;
            }
            setIsLoading(true);
            const userInfoRes = await axios.get("https://api.nexon.co.kr/fifaonline4/v1.0/users", {
                headers: { Authorization: apiKey },
                params: { nickname: userName }
            });
            const fUMI = await findUserMatchInfo(userInfoRes.data.accessId, matchType);
            const fUMD = await findUserMatchDetail(fUMI.data);
            setUserInfo({ nickname: userInfoRes.data.nickname, level: userInfoRes.data.level, matchDetail: fUMD });
            dispatch(matchDataActions.set(fUMD));
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            alert('존재하지 않는 유저입니다.');
            throw error;
        }
    }
    // user의 asseccId를 이용해 매치 정보 조회 하기
    const findUserMatchInfo = (userAccessId: string, matchType: number) => {
        const userMatchRes = axios.get(`https://api.nexon.co.kr/fifaonline4/v1.0/users/${userAccessId}/matches?matchtype=${matchType}&offset=${0}&limit=${20}`, {
            headers: { Authorization: apiKey }
        });
        return userMatchRes;
    }

    // matchInfo의 matchId를 이용해 match Detail을 조회하는 함수
    const findUserMatchDetail = async (matchId: []) => {
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
                        <MyInfo userInfo={userInfo} userInfoRequest={userInfoRequest} isLoding={isLoding} />
                    </S.Article>
                </S.Main>
                <S.SideBarRight>
                    <UserSearch />
                </S.SideBarRight>
            </S.ContainerMain>
            <S.Footer>
                <Footer />
            </S.Footer>
            <ModalPlacer />
        </S.ContainerWrap>
    )
}