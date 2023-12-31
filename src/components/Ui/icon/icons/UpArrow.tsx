import { IconSVGProps } from '@/types';
import React from 'react'

const UpArrow = ({ size }: IconSVGProps) => {
    return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width={size} height={size} rx="10" fill="#E5E5E5" />
            <path d="M29.5104 19.4492C29.1875 19.8184 28.7604 20 28.3333 20C27.9062 20 27.4802 19.8169 27.1552 19.4507L21.6667 13.2793V31.25C21.6667 32.2865 20.9203 33.0723 20.0469 33.0723C19.1734 33.0723 18.3333 32.2871 18.3333 31.25V13.2793L12.8453 19.4492C12.1943 20.1816 11.1396 20.1816 10.4885 19.4492C9.8375 18.7168 9.8375 17.5303 10.4885 16.7978L18.8219 7.42285C19.4729 6.69043 20.5276 6.69043 21.1786 7.42285L29.512 16.7978C30.1615 17.5332 30.1615 18.7168 29.5104 19.4492Z" fill="#9BDA9E" />
        </svg>


    );
};

export default UpArrow