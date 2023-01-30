import React from "react";
import * as S from './Footer.styled';
import git from "../../resource/logo/free-icon-github-logo-25231.png";
export const Footer = () => {
    const gitUrl = "https://github.com/dudwo1996";
    return (
        <S.Container>
            <S.DivWrap>
                <S.ItemDiv><S.FooterImg src={git} /></S.ItemDiv>
                <S.ItemDiv><S.FooterImg src={git} /></S.ItemDiv>
                <S.ItemDiv><S.FooterImg src={git} /></S.ItemDiv>
                <S.ItemDiv><S.FooterImg src={git} /></S.ItemDiv>
            </S.DivWrap>
        </S.Container>
    )
}