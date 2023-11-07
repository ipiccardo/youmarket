'use client'

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
import BackArrow from "./icons/BackArrow";
import React from 'react';



type IconProps = {
    name: string;
    size: number;
};

const Icon: React.FC<IconProps> = ({ name, size }) => {
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
        case "addacount":
            return <AddAcount size={size} />;
        case "upload":
            return <Upload size={size} />;
        case "search":
            return <SearchIcon size={size} />;
        case "back":
            return <BackArrow size={size} />;
        default:
            return null;
    }
};

export default Icon;


