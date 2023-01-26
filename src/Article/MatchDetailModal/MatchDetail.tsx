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
        <S.ContainerBackground>
            <S.Container>
                <S.Header>경기 상세 기록</S.Header>
                <S.Body>
                    <S.HeadOfBodyWrap>
                        <S.HeadOfBody>{me[0].nickname}</S.HeadOfBody>
                        <S.HeadOfBody>경기 당 평균</S.HeadOfBody>
                        <S.HeadOfBody>항목</S.HeadOfBody>
                        <S.HeadOfBody>경기 당 평균</S.HeadOfBody>
                        <S.HeadOfBody>{other[0].nickname}</S.HeadOfBody>
                    </S.HeadOfBodyWrap>
                    <S.BodyOfBodyWrap>
                    <S.BodyOfBody>1</S.BodyOfBody>
                    <S.BodyOfBody>2</S.BodyOfBody>
                    <S.BodyOfBody>3</S.BodyOfBody>
                    <S.BodyOfBody>4</S.BodyOfBody>
                    <S.BodyOfBody>5</S.BodyOfBody>
                    </S.BodyOfBodyWrap>
                </S.Body>
                <S.Foot>
                    <S.CloseBtn onClick={closeSelf} >닫기</S.CloseBtn>
                </S.Foot>
            </S.Container>
        </S.ContainerBackground>
    )
}