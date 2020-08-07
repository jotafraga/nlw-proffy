import React, { TextareaHTMLAttributes } from 'react';

import './styles.css';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    id: string;
}

const TextArea: React.FunctionComponent<TextAreaProps> = ({ id, label, ...rest }) => {
    return (
        <div className="textarea-block">
            <label htmlFor={id}>{label}</label>
            <textarea id={id} {...rest} />
        </div>
    );
}

export default TextArea;