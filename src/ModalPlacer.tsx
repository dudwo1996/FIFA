import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { modalActions } from './store/slices/modalSlice';

const Container = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 1;
`
export const ModalPlacer = () => {
    const dispatch = useDispatch();
    // const modals = useSelector(state => state);
    const modalSelector: any = useSelector(state => state);
    const modals = modalSelector.modals;
    return (
        <Container>
            {modals.map((modal: any) => ({
                ...modal.ui,
                key: modal.key,
                props: {
                    ...modal.ui.props,
                    modalId: modal.key,
                    closeSelf: () => {
                        dispatch(modalActions.close(modal.key));
                    },
                },
            }))}
        </Container>
    );
};