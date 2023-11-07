'use client'
import React, { useEffect, useRef } from "react";
import classes from "./button.module.scss";
import Link from "next/link";
import { buttonProps } from "@/app/types";



const Button = ({ href, classNameButton, classNameContent, text, secondaryButton, flag, onClick, disabled }: buttonProps): JSX.Element => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (flag && buttonRef.current) {
            buttonRef.current.focus();
        }
    }, [flag]);


    return (
        <Link href={href}>
            <button disabled={disabled ? true : false} onClick={onClick} ref={buttonRef} className={secondaryButton ? `${classes.secondaryButton} ${classNameButton || ""}` : `${classes.button} ${classNameButton || ""}`}>
                <div className={`${classes.text} ${classNameContent || ""}`}>{text}</div>
            </button>
        </Link>
    );
};

export default Button;
