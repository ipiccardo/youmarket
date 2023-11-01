import React from "react";
import classes from "./button.module.scss";
import Link from "next/link";



interface Props {
    href: string;
    classNameContent?: string;
    classNameButton?: string;
    text: string;
    secondaryButton?: boolean
}

const Button = ({ href, classNameButton, classNameContent, text, secondaryButton }: Props): JSX.Element => {
    return (
        <Link href={href}>
            <button className={secondaryButton ? `${classes.secondaryButton} ${classNameButton || ""}` : `${classes.button} ${classNameButton || ""}`}>
                <div className={`${classes.text} ${classNameContent || ""}`}>{text}</div>
            </button>
        </Link>
    );
};

export default Button;
