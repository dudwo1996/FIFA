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
    //userMatchDetailInfo.matchDetail.data
    const userMatchDetailInfo: any = useSelector((state) => state);
    return (
        <S.Container>
            {userInfo.matchDetail.length !== 0 ?
                <>
                    <S.Div>
                        {userInfo.nickname} 구단주님의 정보
                    </S.Div>
                    <S.Div>
                        레벨: {userInfo.level}
                    </S.Div>
                    <S.MatchHead>
                        <S.TitleString>경기 기록</S.TitleString>
                        <S.dataGuideBtn>데이터 가이드</S.dataGuideBtn>
                    </S.MatchHead>
                    <S.MatchDataDiv>
                        <S.TableHead>
                            <S.HeadItem>매치 일시</S.HeadItem>
                            <S.HeadItem>내팀</S.HeadItem>
                            <S.HeadItem>스코어</S.HeadItem>
                            <S.HeadItem>상대 팀</S.HeadItem>
                            <S.HeadItem>결과</S.HeadItem>
                        </S.TableHead>
                        {
                            userInfo.matchDetail.map((match: any) => {
                                const me = match?.matchInfo.filter((x: any) => x.nickname === userInfo.nickname)[0];
                                const other = match?.matchInfo.filter((x: any) => x.nickname !== userInfo.nickname)[0];
                                return (
                                    <S.TableBody key={match.matchId}>
                                        <S.BodyItem>{dayjs(match.matchDate).format("YYYY-MM-DD hh:mm")}</S.BodyItem>
                                        <S.BodyItem>{me?.nickname}</S.BodyItem>
                                        <S.BodyItem>{me?.shoot?.goalTotal} <S.DetailButton>상세보기</S.DetailButton> {other?.shoot?.goalTotal}</S.BodyItem>
                                        <S.BodyItem>{other?.nickname}</S.BodyItem>
                                        <S.BodyItem>{me?.matchDetail?.matchResult}</S.BodyItem>
                                    </S.TableBody>
                                )
                            })
                        }
                    </S.MatchDataDiv>
                </>
                : <S.Div>우측에 검색하고싶은 구단주님을 검색해주세요.</S.Div>}
        </S.Container>
    )
}