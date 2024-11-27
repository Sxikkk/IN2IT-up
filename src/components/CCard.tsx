import React, {FC} from 'react';
import {CardProps} from "../assets/data";

const CCard: FC<CardProps> = ({types, name, about, age}) => {
    return (
        <div className='CCard'
            style={{backgroundColor: 'white', borderRadius: '40px', padding: '20px', maxWidth: '400px'}}
        >
            <div className="cc-t"
                style={{ borderRadius: '40px', display: 'flex', background: '#e4e3e3',}}
            >
                {types.map(type => (
                    <h6
                        style={{color: 'gray', padding: '1rem', margin: '0'}}
                    >{type}</h6>
                ))}
            </div>
            <div className="cc-m">
                <h1>{name}</h1>
                <p>{about}</p>
            </div>
            <div className="cc-b">
                <hr/>
                <p>Срок обучения: <strong>{age}</strong></p>
            </div>

        </div>
    );
};

export default CCard;