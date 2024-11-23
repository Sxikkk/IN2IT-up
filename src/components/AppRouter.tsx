import React, {FC} from 'react';
import {Route, Routes} from "react-router";
import {RProps} from "../router";

interface Props {
    links: RProps[]
}

const AppRouter: FC<Props> = ({links}) => {
    return (
        <Routes>
            {links.map((link) => (
                <Route key={link.path} path={link.path} element={<link.element/>}/>
            ))}
        </Routes>
    );
};

export default AppRouter;