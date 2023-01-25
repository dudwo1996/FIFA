import dayjs from "dayjs";
import * as S from './MyInfo.styled';
import { useSelector } from "react-redux";
type MyInfoProps = {
    userInfo: {
        nickname: string;
        level: number;
        matchDetail: any;
    };
}

export const MyInfo = (props: MyInfoProps) => {
    const { userInfo } = props;
    const userMatchDetailInfo: any = useSelector((state) => state);
    return (
        <S.Container onClick={() => console.log('1212', userInfo)}>
            {userInfo.nickname !== "" ?
                <>
                    <S.Div>
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
                            userMatchDetailInfo.matchDetail.data.map((match:any) => {
                                    <S.TableBody key={match.matchId}>
                                        <S.BodyItem>{dayjs(match.matchDate).format("YY-MM-DD")}</S.BodyItem>
                                        <S.BodyItem>{match?.matchInfo[0]?.nickname}</S.BodyItem>
                                        <S.BodyItem>{match?.matchInfo[0]?.shoot?.goalTotal} 대 {match?.matchInfo[1]?.shoot?.goalTotal }</S.BodyItem>
                                        <S.BodyItem>{match?.matchInfo[1]?.nickname}</S.BodyItem>
                                        <S.BodyItem>{match?.matchInfo[0]?.matchDetail?.matchResult}</S.BodyItem>
                                    </S.TableBody>
                            })
                        }
                    </S.Div>
                </>
                : <S.Div>우측에 검색하고싶은 구단주님을 검색해주세요.</S.Div>}
        </S.Container>
    )
}