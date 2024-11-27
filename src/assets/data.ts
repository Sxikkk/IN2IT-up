import {SvgIconTypeMap} from "@mui/material";
import {OverridableComponent} from "@mui/material/OverridableComponent";

export interface ICard {
    name: string;
    price: number;
    about: string;
    firstColor?: string | undefined;
    secondColor?: string | undefined;
}

export interface IGrodItem {
    title:string;
    body:string;
    imgSrc?: OverridableComponent<SvgIconTypeMap>;
}

export interface CardProps {
    types: string[];
    name: string;
    about: string;
    age: string;
}
