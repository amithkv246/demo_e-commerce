import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { clearNoResults, clearSearchId } from '../redux/slice/slice';

interface style {
    minWidth: string;
}

interface InputGroupComProps {
    type: string,
    placeholder?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onClick?: () => void,
    value?: string,
    bs?: string,
    style: style;
}

const InputGroupCom: FC<InputGroupComProps> = ({ type, placeholder, onChange, onClick, value, bs, style }) => {
    const dispatch = useDispatch()

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Backspace") {
            dispatch(clearSearchId())
            dispatch(clearNoResults())
        } else {
            null;
        }
    }
    return (
        <>
            <div className="input-group">
                <input onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleKeyDown(e)} onChange={onChange} className={"form-control " + bs} type={type} placeholder={placeholder} value={value} style={style} aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button onClick={onClick} className={"btn btn-outline-secondary " + bs} type="button" id="button-addon2"><i className="fa-solid fa-magnifying-glass" style={{ color: "#999999" }}></i></button>
            </div>
        </>
    );
};

export default InputGroupCom;