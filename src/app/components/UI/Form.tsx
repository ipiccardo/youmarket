'use client'
import React, { useState, useRef, useEffect, useContext } from 'react';
import classes from "./form.module.scss";
import Button from './Button';
import { store } from '@/app/context/context';

type NumberArray = (number | '' | any)[];

function Form() {
    const inputRefs: any = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
    const [values, setValues] = useState<NumberArray>(['', '', '', '', '', '']);
    const [focusSeted, setFocusSeted] = useState<boolean>(false);
    const [isValid, setIsValid] = useState<boolean>(false);
    const [inputFinalValue, setInputFinalValue] = useState('');

    const context = useContext(store)

    const { pin }: any = context

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {

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

    useEffect(() => {
        const pinAsString = pin.toString();
        const unifiedValues = values.join('');
        setInputFinalValue(unifiedValues);
        const isValueEqualPIN = unifiedValues === pinAsString;
        setIsValid(isValueEqualPIN);
    }, [values, pin]);


    const handleInputFocus = (index: number) => {
        const newValues = [...values];
        if (newValues[index] !== '') {
            newValues[index] = '';
            setValues(newValues);
        }
    };


    return (
        <form className={classes.formContainer}>
            <div className={classes.inputsContainer}>
                {inputRefs.map((inputRef: React.RefObject<HTMLInputElement>, index: number) => {
                    return (
                        <input
                            key={index}
                            type="text"
                            inputMode='numeric'
                            value={values[index]}
                            onChange={(e) => handleChange(e, index)}
                            onFocus={() => handleInputFocus(index)}
                            ref={inputRef}
                            min={0}
                            max={9}
                        />
                    )
                })
                }
            </div>
            <Button href={'/pages'} text={'REENVIAR CÓDIGO'} secondaryButton={true} flag={focusSeted} disabled={!isValid} />
            {isValid ? null : <p className={classes.textError}>{inputFinalValue.length >= 6 ? <span>El código es incorrecto.</span> : ''}</p>}
        </form>
    );
}


export default Form;