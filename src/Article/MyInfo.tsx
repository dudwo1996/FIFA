import dayjs from "dayjs";
import * as S from './MyInfo.styled';
import { useSelector } from "react-redux";
import { useState } from "react";
import { useModal } from "../hooks/useModal";
import { MatchDetail } from "./MatchDetailModal/MatchDetail";
import spining from "../../resource/spining/Spin-1s-100px .gif"
import glassess from "../../resource/icons/1093183.png";
import questionMark from "../../resource/icons/물음표.jpg";
type MyInfoProps = {
    userInfo: {
        nickname: string;
        level: number;
        matchDetail: any;
    };
    userInfoRequest: Function;
    isLoding: boolean;
}

export const MyInfo = (props: MyInfoProps) => {
    const { userInfo, userInfoRequest, isLoding } = props;
    const modalCtrl = useModal();
    //userMatchDetailInfo.matchDetail.data
    const userMatchDetailInfo: any = useSelector((state) => state);
    const [userName, setUserName] = useState('');
    const [matchType, setMatchType] = useState(50);
    const [isHover, setIsHover] = useState<HTMLButtonElement | null>(null);

    const onChangeUserName = (name: string) => {
        setUserName(name);
    }

    const openDetailModal = (matchId: string) => {

        modalCtrl.open(<MatchDetail matchId={matchId} userName={userName} />);
    }

    const MatchTypeOnChange = (e: any) => {
        setMatchType(e.target.value);
    }

    return (
        <S.Container>
            {isLoding ? <S.Loading src={spining} alt='loading' /> : userInfo.matchDetail.length !== 0 ?
                <>
                    <S.Form onSubmit={() => userInfoRequest(userName, matchType)}>
                        <S.matchTypeSelect onChange={e => MatchTypeOnChange(e)}>
                            <S.matchTypeOptions value={50}>공식경기</S.matchTypeOptions>
                            <S.matchTypeOptions value={40}>클래식 1on1</S.matchTypeOptions>
                            <S.matchTypeOptions value={52}>감독모드</S.matchTypeOptions>
                        </S.matchTypeSelect>
                        <S.userNameInput placeholder="유저명을 입력하세요." value={userName} onChange={(e) => onChangeUserName(e.target.value)} />
                        <S.searchBtn onClick={() => userInfoRequest(userName, matchType)}><S.GlassessImg src={glassess} /></S.searchBtn>
                    </S.Form>
                    <S.Div>
                        <S.Span>{userInfo.nickname}(Lv:{userInfo.level})</S.Span><S.Span2>님의 경기 기록</S.Span2>
                    </S.Div>
                    <S.MatchHead>
                        <S.TitleString>경기 기록</S.TitleString>
                        <S.dataGuideBtn>데이터 가이드<S.questionMargImg src={questionMark} />
                            <S.dataGuideDesc >
                                <S.Ul>
                                    <S.Li>경기 기록은 최근 20경기의 경기 기록입니다.</S.Li>
                                    <S.Li>경기 기록은 최근 20경기의 경기 기록입니다.</S.Li>
                                    <S.Li>경기 기록은 최근 20경기의 경기 기록입니다.</S.Li>
                                </S.Ul>
                                <S.Arrow />
                            </S.dataGuideDesc>
                        </S.dataGuideBtn>

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
                                        <S.BodyItem result="">{dayjs(match.matchDate).format("YYYY-MM-DD hh:mm")}</S.BodyItem>
                                        <S.BodyItem result="">{me?.nickname}</S.BodyItem>
                                        <S.BodyItem result="">
                                            {me?.shoot?.goalTotal}
                                            <S.DetailButton onClick={() => openDetailModal(match.matchId)}>상세보기</S.DetailButton>
                                            {other?.shoot?.goalTotal}
                                        </S.BodyItem>
                                        <S.BodyItem result="">{other?.nickname}</S.BodyItem>
                                        <S.BodyItem result={me?.matchDetail?.matchResult}>{me?.matchDetail?.matchResult}</S.BodyItem>
                                    </S.TableBody>
                                )
                            })
                        }
                    </S.MatchDataDiv>
                </>
                : <>
                    <S.Form onSubmit={() => userInfoRequest(userName, matchType)}>
                        <S.matchTypeSelect onChange={e => MatchTypeOnChange(e)}>
                            <S.matchTypeOptions value={50}>공식경기</S.matchTypeOptions>
                            <S.matchTypeOptions value={40}>클래식 1on1</S.matchTypeOptions>
                            <S.matchTypeOptions value={52}>감독모드</S.matchTypeOptions>
                        </S.matchTypeSelect>
                        <S.userNameInput placeholder="유저명을 입력하세요." value={userName} onChange={(e) => onChangeUserName(e.target.value)} />
                        <S.searchBtn onClick={() => userInfoRequest(userName, matchType)}><S.GlassessImg src={glassess} /></S.searchBtn>
                    </S.Form>
                </>
            }
        </S.Container>
    )
}