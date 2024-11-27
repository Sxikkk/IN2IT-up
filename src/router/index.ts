import {RouteProps} from "react-router";
import Main from "../pages/Main";
import Curses from "../pages/Curses";
import Contacts from "../pages/Contacts";
import Forum from "../pages/Forum";
import Login from "../pages/Login";

export interface RProps {
    path: string;
    element: () => JSX.Element;
    exact: boolean;
    name?: string;
}

export const routes: RProps[] = [
    {path: '/', element: Main, exact: true, name: 'Главная'},
    {path: '/curses', element: Curses, exact: true, name: 'Курсы'},
    {path: '/contact', element: Contacts, exact: true, name: 'Контакты'},
    {path: '/forum', element: Forum, exact: true, name: 'форум'},
    {path: '/Login', element: Login, exact: true},
]