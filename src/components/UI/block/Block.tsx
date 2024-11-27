import React, {FC} from 'react';
import './Block.css'

interface Props {
    title: string;
    body: string;
}

const Block: FC<Props> = ({title, body}) => {
    return (
        <div className="block">
            <h2>{title}</h2>
            <h6>{body}</h6>
        </div>
    );
};

export default Block;