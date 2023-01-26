export type UserInfo = {
    nickname: string;
    level: number;
    asseccId: string;
}

export type UserMatchInfo = {
    matchDate: string,
    matchId: string,
    matchInfo: [],
    matchType: number,
}

// Modal-----------------------------
export type ModalProps = {
    modalId?: number;
    closeSelf?: () => void; // 모달 닫기
};

export type ModalType = {
    ui: JSX.Element;
    key: number;
};