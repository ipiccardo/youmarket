"use client";

import { IconProps } from "@/app/types";
import Gift from "./icons/Gift";
import Movements from "./icons/Movements";
import Recharge from "./icons/Recharge";
import Settings from "./icons/Settings";
import DownArrow from "./icons/DownArrow";
import RedDownArrow from "./icons/RedDownArrow";
import UpArrow from "./icons/UpArrow";
import AddAcount from "./icons/AddAcount";
import Upload from "./icons/Upload";
import SearchIcon from "./icons/SearchIcon";


const Icons = (name: string | any, size: number) => {
    switch (name) {
        case "settings":
            return <Settings size={size} />;
        case "gift":
            return <Gift size={size} />;
        case "movements":
            return <Movements size={size} />;
        case "recharge":
            return <Recharge size={size} />;
        case "downarrow":
            return <DownArrow size={size} />;
        case "reddownarrow":
            return <RedDownArrow size={size} />;
        case "uparrow":
            return <UpArrow size={size} />;
        case "uparrow":
            return <UpArrow size={size} />;
        case "addacount":
            return <AddAcount size={size} />;
        case "upload":
            return <Upload size={size} />;
        case "search":
            return <SearchIcon size={size} />;
        default:
            return '';
    }
};

/**
 * @param name Nombre del icono
 * @param size Tamaño del icono
 * @param onClick Función a ejecutar al hacer click
 */

export default function Icon({ name, size = 20, onClick }: IconProps) {

    return Icons(name, size);
}
