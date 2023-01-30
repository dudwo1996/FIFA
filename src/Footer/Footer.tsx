import React from "react";
import * as S from './Footer.styled';
import git from "../../resource/logo/github-gf55eb9d5f_640.png";
import youtube from "../../resource/logo/로고다운로드-유튜브로고 아이콘-9.png";
import fifa from "../../resource/logo/mobile_180.png";


export const Footer = () => {
    const gitUrl = "https://github.com/dudwo1996";
    return (
        <S.Container>
            <S.DivWrap>
                <S.ItemDiv><S.Atag href="http://www.github.com/dudwo1996"><S.FooterImg src={git} /></S.Atag></S.ItemDiv>
                <S.ItemDiv><S.Atag href="https://www.youtube.com/@EASPORTSTMFIFAONLINE"><S.FooterImg src={youtube} /></S.Atag></S.ItemDiv>
                <S.ItemDiv><S.Atag href="https://fifaonline4.nexon.com/main/index"><S.FooterImg src={fifa} /></S.Atag></S.ItemDiv>
            </S.DivWrap>
        </S.Container>
    )
}