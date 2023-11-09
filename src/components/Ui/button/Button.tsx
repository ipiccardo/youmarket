'use client'
import React, { useEffect, useRef } from "react";
import classes from "./button.module.scss";
import Link from "next/link";
import { buttonProps } from "@/types";



const Button = ({ href, classNameButton, classNameContent, text, secondaryButton, flag, onClick, disabled }: buttonProps): JSX.Element => {
    const buttonRef = useRef<any>(null);

    useEffect(() => {
        if (flag && buttonRef.current !== null) {
            buttonRef.current.focus();
        }
    }, [flag]);


    return (
        <Link href={href} className={!disabled ? `${classes.anchorButtonFocused}` : `${classes.anchorButton}`} ref={buttonRef}>
            <button disabled={disabled ? true : false} onClick={onClick} className={secondaryButton ? `${classes.secondaryButton} ${classNameButton || ""}` : `${classes.button} ${classNameButton || ""}`}>
                <div className={`${classes.text} ${classNameContent || ""}`}>{text}</div>
            </button>
        </Link>
    );
};

export default Button;
