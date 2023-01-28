import React from "react";
import * as S from './Header.styled';
import Fifa4Logo from '../../resource/logo/logo_fo4.png'

export const Header = () => {
    return (
        <S.Container><S.Image onClick={() => window.location.replace("/")} src={Fifa4Logo} alt="xbox" /></S.Container>
    )
}