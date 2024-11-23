import React, {FC} from 'react';
import './Button.css'

interface Props {
    defaultValue: string;
    onClick?: () => void;
}

const Button: FC<Props> = ({defaultValue, onClick}) => {
    return (
        <button onClick={onClick} className="button">
            {defaultValue}
        </button>
    );
};

export default Button;