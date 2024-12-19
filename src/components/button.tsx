import { FC } from 'react';

interface ButtonComProps {
    value: string | JSX.Element,
    onClick?: () => void
    bs?: string
}

const ButtonCom: FC<ButtonComProps> = ({ value, onClick, bs }) => {
    return (
        <>
            <button className={'btn btn-outline-secondary me-1 ms-1 ' + bs} onClick={onClick}>{value}</button>
        </>
    );
};

export default ButtonCom;