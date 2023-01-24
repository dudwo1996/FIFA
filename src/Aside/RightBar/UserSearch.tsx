import React, { useState } from 'react';
import * as S from './UserSearch.style'
type UserSearchProps = {
    userInfoRequest: Function;
}
export const UserSearch = (props: UserSearchProps) => {
    const { userInfoRequest } = props;
    const [userName, setUserName] = useState('');

    const onChangeUserName = (name: string) => {
        setUserName(name);
    }

    return (
        <S.Container>
            <input placeholder="유저명을 입력하세요." value={userName} onChange={(e) => onChangeUserName(e.target.value)} />
            <button onClick={() => userInfoRequest(userName)}>검색</button>
        </S.Container>
    )
}