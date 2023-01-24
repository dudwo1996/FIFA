import axios from "axios";
import React, { useState, useEffect } from "react";
import { UserInfo, UserMatchInfo } from "../model";
import dayjs from "dayjs";
import * as S from './MyInfo.styled';

type MyInfoProps = {
    userInfo: {
        nickname: string;
        level: number;
        asseccId: string;
    };
}

export const MyInfo = (props: MyInfoProps) => {
    const { userInfo } = props;
    const [userMatchInfo, setUserMatchInfo] = useState([]);
    const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJYLUFwcC1SYXRlLUxpbWl0IjoiNTAwOjEwIiwiYWNjb3VudF9pZCI6Ijk3MzY5NTkxMCIsImF1dGhfaWQiOiIyIiwiZXhwIjoxNjg5NTU2NTcwLCJpYXQiOjE2NzQwMDQ1NzAsIm5iZiI6MTY3NDAwNDU3MCwic2VydmljZV9pZCI6IjQzMDAxMTQ4MSIsInRva2VuX3R5cGUiOiJBY2Nlc3NUb2tlbiJ9.DtOiyxw1Piwe5xlvEc1EQ164Av7znhXB2pg0Xz3j-gI'

    const findUserMatchInfo = async () => {
        const userMatchRes = await axios.get(`https://api.nexon.co.kr/fifaonline4/v1.0/users/${userInfo.asseccId}/matches?matchtype=${50}&offset=${0}&limit=${10}`, {
            headers: { Authorization: apiKey }
        })
        if (userMatchRes.status === 200) {
            const matchData: any = [];
            userMatchRes.data.map((matchId: string) => {
                axios.get(`https://api.nexon.co.kr/fifaonline4/v1.0/matches/${matchId}`, {
                    headers: { Authorization: apiKey }
                }).then((res) => {
                    matchData.push(res.data);
                })
            })
            setUserMatchInfo(matchData);
        }
    }

    useEffect(() => {
        findUserMatchInfo();
    }, [])
    return (
        <S.Container>
            {userInfo.nickname !== "" ?
                <>
                    <S.Div onClick={()=>console.log(userMatchInfo)}>
                        {userInfo.nickname} 구단주님의 정보
                    </S.Div>
                    <S.Div>
                        레벨: {userInfo.level}
                    </S.Div>
                    <S.Div>
                        <S.Div>경기 기록</S.Div>
                        <S.TableHead>
                            <S.HeadItem>매치 일시</S.HeadItem>
                            <S.HeadItem>내팀</S.HeadItem>
                            <S.HeadItem>스코어</S.HeadItem>
                            <S.HeadItem>상대 팀</S.HeadItem>
                            <S.HeadItem>결과</S.HeadItem>
                        </S.TableHead>
                        {
                            userMatchInfo.map((match:any) => {
                                return (
                                    <S.TableBody key={match.matchId}>
                                        <S.BodyItem>{dayjs(match.matchDate).format("YY-MM-DD")}</S.BodyItem>
                                        <S.BodyItem>{match?.matchInfo[0]?.nickname}</S.BodyItem>
                                        <S.BodyItem>{match?.matchInfo[0]?.shoot?.goalTotal} 대 {match?.matchInfo[1]?.shoot?.goalTotal }</S.BodyItem>
                                        <S.BodyItem>{match?.matchInfo[1]?.nickname}</S.BodyItem>
                                        <S.BodyItem>{match?.matchInfo[0]?.matchDetail?.matchResult}</S.BodyItem>
                                    </S.TableBody>
                                )
                            })
                        }
                    </S.Div>
                </>
                : <S.Div>우측에 검색하고싶은 구단주님을 검색해주세요.</S.Div>}
        </S.Container>
    )
}