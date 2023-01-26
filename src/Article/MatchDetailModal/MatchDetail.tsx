import React from "react";
import { ModalProps } from "../../model";
import * as S from './MatchDetail.style';

type MatchDetailProps = {

} & ModalProps

export const MatchDetail = (props: MatchDetailProps) => {
    const { closeSelf } = props
    return (
        <S.ContainerBackground>
            <S.Container>
                <S.Header>헤더</S.Header>
                <S.Body>바디</S.Body>
                <S.Foot>
                    <S.CloseBtn onClick={closeSelf} >닫기</S.CloseBtn>
                </S.Foot>
            </S.Container>
        </S.ContainerBackground>
    )
}