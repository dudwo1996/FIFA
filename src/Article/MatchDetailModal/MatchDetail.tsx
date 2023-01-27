import React from "react";
import { useSelector } from "react-redux";
import { ModalProps } from "../../model";
import * as S from './MatchDetail.style';

type MatchDetailProps = {
    matchId: string;
    userName: string;
} & ModalProps

export const MatchDetail = (props: MatchDetailProps) => {
    const { closeSelf, matchId, userName } = props;
    const matchDetailData: any = useSelector(state => state);
    const selectData = matchDetailData.matchDetail.data.filter((data: any) => data.matchId === matchId)
    const me = selectData[0].matchInfo.filter((match: any) => match.nickname === userName);
    const other = selectData[0].matchInfo.filter((match: any) => match.nickname !== userName);
    console.log(selectData);
    console.log('me', me);
    console.log('other', other);
    return (
        <S.ContainerBackground onClick={closeSelf}>
            <S.Container>
                <S.Header>경기 상세 기록</S.Header>
                <S.Body>
                    <S.HeadOfBodyWrap>
                        <S.HeadOfBody>{me[0]?.nickname}</S.HeadOfBody>
                        <S.HeadOfBody>항목</S.HeadOfBody>
                        <S.HeadOfBody>{other[0]?.nickname}</S.HeadOfBody>
                    </S.HeadOfBodyWrap>
                    <S.BodyOfBodyWrap>
                        <S.BodyOfBody>{me[0]?.shoot?.goalTotal}</S.BodyOfBody>
                        <S.BodyOfBody style={{ backgroundColor: '#f8f7ff' }}>골</S.BodyOfBody>
                        <S.BodyOfBody>{other[0]?.shoot.goalTotal}</S.BodyOfBody>
                    </S.BodyOfBodyWrap>
                    <S.BodyOfBodyWrap>
                        <S.BodyOfBody>{me[0]?.shoot?.shootTotal}</S.BodyOfBody>
                        <S.BodyOfBody style={{ backgroundColor: '#f8f7ff' }}>슛</S.BodyOfBody>
                        <S.BodyOfBody>{other[0]?.shoot?.shootTotal}</S.BodyOfBody>
                    </S.BodyOfBodyWrap>
                    <S.BodyOfBodyWrap>
                        <S.BodyOfBody>{me[0]?.shoot?.effectiveShootTotal}</S.BodyOfBody>
                        <S.BodyOfBody style={{ backgroundColor: '#f8f7ff' }}>유효슛</S.BodyOfBody>
                        <S.BodyOfBody>{other[0]?.shoot?.effectiveShootTotal}</S.BodyOfBody>
                    </S.BodyOfBodyWrap>
                    <S.BodyOfBodyWrap>
                        <S.BodyOfBody>{Math.round(me[0]?.shoot?.goalTotal / me[0].shoot.shootTotal * 100)}%</S.BodyOfBody>
                        <S.BodyOfBody style={{ backgroundColor: '#f8f7ff' }}>공격 성공률(%)</S.BodyOfBody>
                        <S.BodyOfBody>{Math.round(other[0]?.shoot?.goalTotal / other[0]?.shoot?.shootTotal * 100)}%</S.BodyOfBody>
                    </S.BodyOfBodyWrap>
                    <S.BodyOfBodyWrap>
                        <S.BodyOfBody>{Math.round(me[0]?.pass?.passSuccess / me[0]?.pass?.passTry * 100)}%</S.BodyOfBody>
                        <S.BodyOfBody style={{ backgroundColor: '#f8f7ff' }}>패스 성공률(%)</S.BodyOfBody>
                        <S.BodyOfBody>{Math.round(other[0]?.pass?.passSuccess / other[0]?.pass?.passTry * 100)}%</S.BodyOfBody>
                    </S.BodyOfBodyWrap>
                    <S.BodyOfBodyWrap>
                        <S.BodyOfBody>{me[0]?.matchDetail?.possession}%</S.BodyOfBody>
                        <S.BodyOfBody style={{ backgroundColor: '#f8f7ff' }}>점유율(%)</S.BodyOfBody>
                        <S.BodyOfBody>{other[0]?.matchDetail?.possession}%</S.BodyOfBody>
                    </S.BodyOfBodyWrap>
                    <S.BodyOfBodyWrap>
                        <S.BodyOfBody>{me[0]?.matchDetail?.cornerKick}</S.BodyOfBody>
                        <S.BodyOfBody style={{ backgroundColor: '#f8f7ff' }}>코너킥</S.BodyOfBody>
                        <S.BodyOfBody>{other[0]?.matchDetail?.cornerKick}</S.BodyOfBody>
                    </S.BodyOfBodyWrap>
                    <S.BodyOfBodyWrap>
                        <S.BodyOfBody>{me[0]?.defence?.tackleTry}</S.BodyOfBody>
                        <S.BodyOfBody style={{ backgroundColor: '#f8f7ff' }}>태클</S.BodyOfBody>
                        <S.BodyOfBody>{other[0]?.defence?.tackleTry}</S.BodyOfBody>
                    </S.BodyOfBodyWrap>
                    <S.BodyOfBodyWrap>
                        <S.BodyOfBody>{me[0]?.matchDetail?.foul}</S.BodyOfBody>
                        <S.BodyOfBody style={{ backgroundColor: '#f8f7ff' }}>파울</S.BodyOfBody>
                        <S.BodyOfBody>{other[0]?.matchDetail?.foul}</S.BodyOfBody>
                    </S.BodyOfBodyWrap>
                    <S.BodyOfBodyWrap>
                        <S.BodyOfBody>{me[0]?.matchDetail?.yellowCards}</S.BodyOfBody>
                        <S.BodyOfBody style={{ backgroundColor: '#f8f7ff' }}>경고</S.BodyOfBody>
                        <S.BodyOfBody>{other[0]?.matchDetail?.yellowCards}</S.BodyOfBody>
                    </S.BodyOfBodyWrap>
                    <S.BodyOfBodyWrap>
                        <S.BodyOfBody>{me[0]?.matchDetail?.redCards}</S.BodyOfBody>
                        <S.BodyOfBody style={{ backgroundColor: '#f8f7ff' }}>퇴장</S.BodyOfBody>
                        <S.BodyOfBody>{other[0]?.matchDetail?.redCards}</S.BodyOfBody>
                    </S.BodyOfBodyWrap>
                    <S.BodyOfBodyWrap>
                        <S.BodyOfBody>{me[0]?.matchDetail?.injury}</S.BodyOfBody>
                        <S.BodyOfBody style={{ backgroundColor: '#f8f7ff' }}>부상</S.BodyOfBody>
                        <S.BodyOfBody>{other[0]?.matchDetail?.injury}</S.BodyOfBody>
                    </S.BodyOfBodyWrap>
                </S.Body>
                {/* <S.Foot>
                    <S.CloseBtn onClick={closeSelf} >닫기</S.CloseBtn>
                </S.Foot> */}
            </S.Container>
        </S.ContainerBackground>
    )
}