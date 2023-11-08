'use client'

export type IconProps = {
    name:
    | "settings"
    | "gift"
    | "movements"
    | "recharge"
    | "downarrow"
    | "reddownarrow"
    | "uparrow"
    | "addacount"
    | "upload"
    | "search"
    | "back"
    | string
    size: number;
    onClick?: Function;
};

export type IconSVGProps = {
    size: number;
};

export interface DataProps {
    icono: string,
    texto: string,
    monto: string,
    fecha: string
}


export interface acountPropTypes {
    name: string,
    mail: string,
    checked: boolean
}

export type IconsProps = {
    name: string;
    size: number;
};

export interface buttonProps {
    href: string;
    classNameContent?: string;
    classNameButton?: string;
    text: string;
    secondaryButton?: boolean;
    flag?: boolean;
    onClick?: any;
    disabled?: boolean
}


export interface InputProps {
    searchTerm: string;
    setSearchTerm: (value: string) => void;
}