import React, {FC} from 'react';
import CodeCardOff from "./UI/CodeCard/code-card-off";
import {ICard} from "../assets/data";

const CardList: FC = () => {

    const cards: ICard[] = [
        {name: 'Java', about: 'тавы', price: 59},
        {name: 'Java', about: 'тавы', price: 59, firstColor: '402311'},
        {name: 'Java', about: 'тавы', price: 59},
    ]


    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                gap: '2rem',
                width: '100%',
            }}
        >
            {cards.map((card) => (
                <CodeCardOff name={card.name} about={card.about} price={card.price} />
            ))}
        </div>
    );
};

export default CardList;