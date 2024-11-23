import React, {FC} from 'react';
import './CodeCard.css'
import Button from "../Button/Button";

interface IProps {
    firstColor?: string;
    secondColor?: string;
    name: string;
    about: string;
    price: number;
}

const CodeCardO: FC<IProps> = ({name, about, price, firstColor, secondColor}) => {
    return (
        <div
            className="code-card"
            style={{background: `linear-gradient(#${firstColor}, #${secondColor})`}}
        >
            <div className="l-cc">
                <h1>{name}</h1>
                <h4>{price}$</h4>
            </div>
            <div className="r-cc">
                <p>{about}</p>
                <Button defaultValue='Купить'/>
            </div>
        </div>
    );
};

export default CodeCardO;