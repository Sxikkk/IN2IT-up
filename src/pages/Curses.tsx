import React from 'react';
import Options from "../components/Options";
import CCardList from "../components/CCardList";

const Curses = () => {
    return (
        <>
            <article
                style={{display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "space-between"}}
            >
                <h1 style={{fontSize: '40px'}}>Курсы</h1>
                <Options/>
                <hr style={{background: '#404545', width: '100%'}}/>
            </article>
            <CCardList></CCardList>
        </>
    );
};

export default Curses;