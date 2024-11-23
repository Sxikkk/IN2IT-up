import {RouteProps} from "react-router";
import Main from "../pages/Main";
import Curses from "../pages/Curses";

export interface RProps {
    path: string;
    element: () => JSX.Element;
    exact: boolean;
    name?: string;
}

export const routes: RProps[] = [
    {path: '/', element: Main, exact: true, name: 'Главная'},
    {path: '/curses', element: Curses, exact: true, name: 'Курсы'},
    {path: '/contact', element: Curses, exact: true, name: 'Контакты'},
    {path: '/forum', element: Curses, exact: true, name: 'форум'},
]