'use client'
import { IconSVGProps } from '@/app/types';
import React from 'react'

const Movements = ({ size }: IconSVGProps) => {
    return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1_292)">
                <path d="M5.85938 5.85938L3.20312 3.20312C2.02344 2.02344 0 2.85938 0 4.52344V13.125C0 14.1641 0.835938 15 1.875 15H10.4766C12.1484 15 12.9844 12.9766 11.8047 11.7969L9.39844 9.39062C12.1094 6.67969 15.8594 5 20 5C28.2812 5 35 11.7188 35 20C35 28.2812 28.2812 35 20 35C16.8125 35 13.8594 34.0078 11.4297 32.3125C10.2969 31.5234 8.74219 31.7969 7.94531 32.9297C7.14844 34.0625 7.42969 35.6172 8.5625 36.4141C11.8125 38.6719 15.7578 40 20 40C31.0469 40 40 31.0469 40 20C40 8.95312 31.0469 0 20 0C14.4766 0 9.47656 2.24219 5.85938 5.85938ZM20 10C18.9609 10 18.125 10.8359 18.125 11.875V20C18.125 20.5 18.3203 20.9766 18.6719 21.3281L24.2969 26.9531C25.0312 27.6875 26.2188 27.6875 26.9453 26.9531C27.6719 26.2188 27.6797 25.0312 26.9453 24.3047L21.8672 19.2266V11.875C21.8672 10.8359 21.0312 10 19.9922 10H20Z" fill="#FB7907" />
            </g>
            <defs>
                <clipPath id="clip0_1_292">
                    <rect width={size} height={size} fill="white" />
                </clipPath>
            </defs>
        </svg>

    );
};

export default Movements