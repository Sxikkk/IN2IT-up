import React, { useState } from 'react';
import './Option.css';

interface MessageBoxProps {
    message: string;
}

const Opt: React.FC<MessageBoxProps> = ({ message }) => {
    const [bgColor, setBgColor] = useState<string>('#ffffff');
    const [pColor, setPColor] = useState<string>('#000000');

    const changeBackgroundColor = () => {
        if (bgColor != '#000000') {
            setBgColor('#000000');
            setPColor('#fff')
        }
        else{
            setPColor('#000000');
            setBgColor('#fff');
        }
    };

    return (
        <div
            className="message-box"
            style={{ backgroundColor: bgColor }}
            onClick={changeBackgroundColor}
        >
            <p style={{border: pColor, color: pColor}} >{message}</p>
        </div>
    );
};

export default Opt;