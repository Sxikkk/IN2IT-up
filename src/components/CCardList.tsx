import React from 'react';
import {CardProps} from "../assets/data";
import CCard from "./CCard";

const CCardList = () => {

    const CARDINFO: CardProps[] = [
        {name: 'Разработчик', age: '3 месяца', about: 'Главный курс для того чтобы начать карьеру в разработке', types: ['Программирование', 'С нуля']},
        {name: 'Разработчик', age: '3 месяца', about: 'Главный курс для того чтобы начать карьеру в разработке', types: ['Программирование', 'С нуля']},
        {name: 'Разработчик', age: '3 месяца', about: 'Главный курс для того чтобы начать карьеру в разработке', types: ['Программирование', 'С нуля']},
        {name: 'Разработчик', age: '3 месяца', about: 'Главный курс для того чтобы начать карьеру в разработке', types: ['Программирование', 'С нуля']},
    ]

    return (
        <div
            style={{background: '#dfdfdf', display: 'flex', gap: '2rem', maxWidth: '100%', minWidth: '440px', padding: '3rem', borderRadius: '40px'}}
        >
            <div className="filt"
                style={{padding: '1rem', background: "white", height: '100%', width: '300px',borderRadius: '40px', justifyContent: 'center', alignItems:'center'}}
            >
                <h2>Поиск по программам</h2>
                <input type="text" placeholder='название программы...'
                    style={{padding: '0.5rem', borderRadius: '40px'}}
                />
            </div>
            <div className="cardss"
                style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem', }}
            >
                {CARDINFO.map((item, index) => (
                    <CCard age={item.age} name={item.name} about={item.about} types={item.types}></CCard>
                ))}
            </div>
        </div>
    );
};

export default CCardList;