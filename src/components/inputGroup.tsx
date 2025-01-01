import { FC } from 'react';

interface style {
    minWidth: string;
}

interface InputGroupComProps {
    type: string,
    placeholder?: string,
    onChange?: () => void,
    value?: string,
    bs?: string,
    style: style;
}

const InputGroupCom: FC<InputGroupComProps> = ({ type, placeholder, onChange, value, bs, style }) => {
    return (
        <>
            <div className="input-group">
                <input className={"form-control " + bs} type={type} placeholder={placeholder} value={value} style={style} onChange={onChange} aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className={"btn btn-outline-secondary " + bs} type="button" id="button-addon2"><i className="fa-solid fa-magnifying-glass" style={{ color: "#999999" }}></i></button>
            </div>
        </>
    );
};

export default InputGroupCom;