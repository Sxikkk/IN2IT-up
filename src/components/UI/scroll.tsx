import React, {FC, useEffect} from 'react';

export enum direction {
    LEFT = 'left',
    RIGHT = 'right',
}

interface IProps {
    dir: direction;
    content: string;
}

const Scroll: FC<IProps> = ({dir, content}) => {

    const [scroll, setScroll] = React.useState(0);

    const scrollHandler = () => {
        if (dir === direction.LEFT)
            setScroll(-window.scrollY);
        if (dir === direction.RIGHT)
            setScroll(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, []);

    return (
        <div
            className="moving-element"
            style={{
                transform: `translateX(${scroll}px)`,
                justifyContent: "center",
            }}
        >
            {content.split('').map((item) => (
                <h1>{item}</h1>
            ))}
        </div>
    )
};

export default Scroll;