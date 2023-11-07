'use client'
import { IconSVGProps } from '@/app/types';
import React from 'react'

const Gift = ({ size }: IconSVGProps) => {
    return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1_298)">
                <path d="M14.8828 5.375L17.6016 10H17.5H11.875C10.1484 10 8.75 8.60156 8.75 6.875C8.75 5.14844 10.1484 3.75 11.875 3.75H12.0469C13.2109 3.75 14.2969 4.36719 14.8828 5.375ZM5 6.875C5 8 5.27344 9.0625 5.75 10H2.5C1.11719 10 0 11.1172 0 12.5V17.5C0 18.8828 1.11719 20 2.5 20H37.5C38.8828 20 40 18.8828 40 17.5V12.5C40 11.1172 38.8828 10 37.5 10H34.25C34.7266 9.0625 35 8 35 6.875C35 3.07812 31.9219 0 28.125 0H27.9531C25.4609 0 23.1484 1.32031 21.8828 3.46875L20 6.67969L18.1172 3.47656C16.8516 1.32031 14.5391 0 12.0469 0H11.875C8.07812 0 5 3.07812 5 6.875ZM31.25 6.875C31.25 8.60156 29.8516 10 28.125 10H22.5H22.3984L25.1172 5.375C25.7109 4.36719 26.7891 3.75 27.9531 3.75H28.125C29.8516 3.75 31.25 5.14844 31.25 6.875ZM2.5 22.5V36.25C2.5 38.3203 4.17969 40 6.25 40H17.5V22.5H2.5ZM22.5 40H33.75C35.8203 40 37.5 38.3203 37.5 36.25V22.5H22.5V40Z" fill="#F67706" />
            </g>
            <defs>
                <clipPath id="clip0_1_298">
                    <rect width={size} height={size} fill="white" />
                </clipPath>
            </defs>
        </svg>

    );
};

export default Gift