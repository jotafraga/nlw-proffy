import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
}

const Input: React.FunctionComponent<InputProps> = ({ id, label, ...rest }) => {
    return (
        <div className="input-block">
            <label htmlFor={id}>{label}</label>
            <input type="text" id={id} {...rest} />
        </div>
    );
}

export default Input;