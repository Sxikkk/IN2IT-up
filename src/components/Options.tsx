import React from 'react';
import Opt from "./UI/option/Option";

const Options = () => {
    const types = ['IT','Дизайн','Веб-разработка','ИИ','GameDev']
    return (
        <div
            style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}
        >
            {types.map((type) => (
                <Opt message={type}/>
            ))}
        </div>
    );
};

export default Options;