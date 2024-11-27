import React from 'react';
import './main.css'
import Scroll, {direction} from "../components/UI/scroll";
import Button from "../components/UI/Button/Button";
import ChangeNumbers from "../components/UI/ChangeNumbers/ChangeNumbers";
import CardList from "../components/CardList";
import GridItems from "../components/Grid";
import {IGrodItem} from "../assets/data";
import OCard from "../components/OCard";
import {useNavigate} from "react-router";

const Main = () => {
    const s = '100101001101010101011010101001010101010101010100101010'
    const grid: IGrodItem[] = [
        {title: 'Гибкий темп обучения', body: 'Возможность ускорять и замедлять образовательный процесс'},
        {title: 'Четыре формата занятий', body: 'Можно учиться в группе или индивидуально, смотреть уроки онлайн или полностью в записи'},
        {title: 'Общение с учителями', body: 'Индивидуальные консультации с преподавателями'},
        {title: 'Обучение по принципу STEM', body: 'Индивидуальные консультации с преподавателями'},
    ]

    const navigate = useNavigate();

    return (
        <>
            <article id='topA'>
                <Scroll dir={direction.LEFT} content={s}/>
                <div className="main-content">
                    <ChangeNumbers />
                    <div className="offer">
                        <h1>Самый легкий путь в IT вместе с нами!</h1>
                        <p>Мы предоставляем множество качественных курсов, без лишних слов и воды</p>
                        <Button defaultValue="Посмотреть" onClick={() => navigate('/curses')}></Button>
                    </div>
                </div>
                <Scroll dir={direction.RIGHT} content={s}/>
            </article>
            <article>
               <CardList/>
            </article>
            <article>
                <h1 style={{fontSize: '40px'}}>Наши преимущества перед другими</h1>
                <GridItems GridItem={grid}/>
            </article>
            <article>
                <h1 style={{fontSize: '40px'}}>Компаниям нужны специалисты с ИТ-навыками</h1>
                <p>ИТ-специалисты востребованы в финансах, ритейле, образовании и многих других отраслях. Экономика и повседневная жизнь все больше переходит в «цифру», поэтому у ИТ-сферы самые большие перспективы на развитие в ближайшем будущем.</p>
                <OCard />
            </article>
            <article style={{
                background: 'linear-gradient(#464646,#7C3598,#464646)',
                fontSize: '40px',
                padding: '2rem',
                display: 'flex',
                textAlign: 'center',
                justifyContent: 'space-between',
                flexDirection: 'column',
            }}>
                <h1 style={{
                    color: 'white',
                }}>НАС ВЫБИРАЮТ, ВЫБЕРИ И ТЫ!</h1>
                <button className='ava' onClick={() => navigate('/curses')}>Записаться на курс</button>
            </article>
        </>
    );
};

export default Main;