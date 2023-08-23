import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManifacturer: (manufacturer: string) => void;
}

export interface PhoneProps {
    image:string;
    title:string;
    price:number;
    year:number; 
    description: string;
}