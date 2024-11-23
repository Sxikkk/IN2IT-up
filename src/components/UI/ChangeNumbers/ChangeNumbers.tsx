import React, { useState, useEffect } from 'react';
import './ChangeNumbers.css'

const ChangeNumbers = () => {

    const [changeY, setChangeY] = useState(0);

    const change = () => {
        setChangeY(1100)
    }

    useEffect(() => {
        setTimeout(change, 1000)
    }, [])

    return (
        <div className="change-numbers">
            <div
                className="f-n"
                style={{transform: `translateY(${changeY - 1100}px)`}}
            >
                <h1>0</h1>
                <h1>1</h1>
            </div>
            <div
                className="s-n"
                style={{transform: `translateY(${-changeY}px)`}}
            >
                <h1>0</h1>
                <h1>1</h1>
            </div>
        </div>
    );
};


export default ChangeNumbers;