import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';

interface style {
    minWidth: string;
}

interface InputGroupComProps {
    type: string,
    placeholder?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void,
    onClick?: () => void,
    value?: string,
    bs?: string,
    style: style;

}

const InputGroupCom: FC<InputGroupComProps> = ({ type, placeholder, onChange, onClick, value, bs, style, onKeyDown }) => {
    const isDisabled = useSelector((state: RootState) => state.counter.isDisabled)
    return (
        <>
            <div className="input-group">
                <input onKeyDown={onKeyDown} onChange={onChange} className={"form-control " + bs} type={type} placeholder={placeholder} value={value} style={style} aria-label="Recipient's username" aria-describedby="button-addon2" disabled={isDisabled} />
                <button onClick={onClick} className={"btn btn-outline-secondary " + bs} type="button" id="button-addon2" disabled={isDisabled} ><i className="fa-solid fa-magnifying-glass" style={{ color: "#999999" }}></i></button>
            </div>
        </>
    );
};

export default InputGroupCom;