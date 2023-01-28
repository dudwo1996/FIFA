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

    const onChangeUserName = (name: string) => {
        setUserName(name);
    }

    const openDetailModal = (matchId: string) => {

        modalCtrl.open(<MatchDetail matchId={matchId} userName={userName} />);
    }
    return (
        <S.Container>
            {isLoding ? <S.Loading src={ spining } alt='loading' />: userInfo.matchDetail.length !== 0 ?
                <>
                    <S.Form onSubmit={() => userInfoRequest(userName)}>
                    <S.userNameInput placeholder="유저명을 입력하세요." value={userName} onChange={(e) => onChangeUserName(e.target.value)} />
                    <S.searchBtn onClick={() => userInfoRequest(userName)}><S.GlassessImg src={glassess}/></S.searchBtn>
                    </S.Form>
                    <S.Div>
                        반갑습니다. <S.Span>{userInfo.nickname}(Lv:{userInfo.level})</S.Span> 구단주님!
                    </S.Div>
                    <S.MatchHead>
                        <S.TitleString>경기 기록</S.TitleString>
                        <S.dataGuideBtn>데이터 가이드<S.questionMargImg src={questionMark}/></S.dataGuideBtn>
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
                                        <S.BodyItem result={ me?.matchDetail?.matchResult }>{me?.matchDetail?.matchResult}</S.BodyItem>
                                    </S.TableBody>
                                )
                            })
                        }
                    </S.MatchDataDiv>
                </>
                : <>
                    <S.Form onSubmit={() => userInfoRequest(userName)}>
                    <S.userNameInput placeholder="유저명을 입력하세요." value={userName} onChange={(e) => onChangeUserName(e.target.value)} />
                    <S.searchBtn onClick={() => userInfoRequest(userName)}><S.GlassessImg src={glassess}/></S.searchBtn>
                    </S.Form>
                </>
            }
        </S.Container>
    )
}