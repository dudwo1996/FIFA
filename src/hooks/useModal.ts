import { useDispatch } from 'react-redux';
import { modalActions } from '../store/slices/modalSlice';

export function useModal() {
    const dispatch = useDispatch();

    const open = (ui: JSX.Element) => {
        const key = Math.floor(Math.random() * 1000000);
        dispatch(modalActions.open({ ui, key }));
    };

    const close = (key: number) => {
        dispatch(modalActions.close(key));
    };

    const closeAll = () => {
        dispatch(modalActions.closeAll());
    };

    return { open, close, closeAll };
}