import { IconSVGProps } from '@/types';
import React from 'react'

const RedDownArrow = ({ size }: IconSVGProps) => {
    return (

        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width={size} height={size} rx="10" fill="#E5E5E5" />
            <path d="M29.5104 23.1992L21.1771 32.5742C20.8542 32.9434 20.4271 33.125 20 33.125C19.5729 33.125 19.1469 32.9419 18.8219 32.5757L10.4885 23.2007C9.8375 22.4683 9.8375 21.2817 10.4885 20.5493C11.1396 19.8169 12.1943 19.8169 12.8453 20.5493L18.3333 26.7266V8.75C18.3333 7.71348 19.0797 6.92773 19.9531 6.92773C20.8266 6.92773 21.6667 7.71348 21.6667 8.75V26.7266L27.1562 20.5508C27.8073 19.8184 28.862 19.8184 29.513 20.5508C30.164 21.2832 30.1614 22.4668 29.5104 23.1992Z" fill="#FF4B4B" fillOpacity="0.47" />
        </svg>


    );
};

export default RedDownArrow