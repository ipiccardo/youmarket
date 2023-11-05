'use client'
import React, { useEffect, useRef } from "react";
import classes from "./button.module.scss";
import Link from "next/link";

interface Props {
    href: string;
    classNameContent?: string;
    classNameButton?: string;
    text: string;
    secondaryButton?: boolean;
    flag?: boolean;
    onClick?: any;
}

const Button = ({ href, classNameButton, classNameContent, text, secondaryButton, flag, onClick }: Props): JSX.Element => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (flag && buttonRef.current) {
            buttonRef.current.focus();
        }
    }, [flag]);


    return (
        <Link href={href}>
            <button onClick={onClick} ref={buttonRef} className={secondaryButton ? `${classes.secondaryButton} ${classNameButton || ""}` : `${classes.button} ${classNameButton || ""}`}>
                <div className={`${classes.text} ${classNameContent || ""}`}>{text}</div>
            </button>
        </Link>
    );
};

export default Button;
