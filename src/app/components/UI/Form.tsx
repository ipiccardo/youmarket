'use client'
import React, { useState, useRef, useEffect } from 'react';
import classes from "./form.module.scss";
import Button from './Button';

type NumberArray = (number | '' | any)[];


function Form() {
    const inputRefs: any = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
    const [values, setValues] = useState<NumberArray>(['', '', '', '', '', '']);
    const [focusSeted, setFocusSeted] = useState<boolean>(false)

    const handleChange = (e: any, index: number) => {

        if ((/^\d$/.test(e.target.value)) || e.target.value === '') {
            setValues((prevValues) => {
                const newValues = [...prevValues];
                newValues[index] = e.target.value;
                return newValues;
            });

            if (index < inputRefs.length - 1) {
                for (let i = 0; i < inputRefs.length - 1; i++) {
                    if (inputRefs[i].current.value === '') {
                        inputRefs[i].current.focus()
                    }
                }
                for (let h = inputRefs.length - 1; h >= 0; h--) {
                    if (inputRefs[h].current.value === '') {
                        inputRefs[h].current.focus()
                    }
                }
            }
            else {
                inputRefs.map((input: any) => {
                    input.current.value === '' ? input.current.focus() : setFocusSeted(true)
                    return
                })
            }
        }
    }


    return (
        <form className={classes.formContainer}>
            <div className={classes.inputsContainer}>
                {inputRefs.map((inputRef: any, index: number) => {
                    return (
                        <input
                            key={index}
                            type="text"
                            inputMode='numeric'
                            value={values[index]}
                            onChange={(e) => handleChange(e, index)}
                            ref={inputRef}
                            min={0}
                            max={9}
                        />
                    )
                })
                }
            </div>
            <Button href={'/'} text={'REENVIAR CÓDIGO'} secondaryButton={true} flag={focusSeted} />
        </form>
    );
}


export default Form;