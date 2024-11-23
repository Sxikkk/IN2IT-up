import React from 'react';
import './main.css'
import Scroll, {direction} from "../components/UI/scroll";
import Button from "../components/UI/Button/Button";
import ChangeNumbers from "../components/UI/ChangeNumbers/ChangeNumbers";
import CardList from "../components/CardList";

const Main = () => {
    const s = '100101001101010101011010101001010101010101010100101010'

    return (
        <>
            <article>
                <Scroll dir={direction.LEFT} content={s}/>
                <div className="main-content">
                    <ChangeNumbers />
                    <div className="offer">
                        <h1>Самый легкий путь в IT вместе с нами!</h1>
                        <p>Мы предоставляем множество качественных курсов, без лишних слов и воды</p>
                        <Button defaultValue="Посмотреть"></Button>
                    </div>
                </div>
                <Scroll dir={direction.RIGHT} content={s}/>
            </article>
           <article>
               <CardList/>
           </article>
        </>
    );
};

export default Main;