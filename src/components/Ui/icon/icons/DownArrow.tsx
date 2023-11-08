import { IconSVGProps } from '@/types';
import React from 'react'

const DownArrow = ({ size }: IconSVGProps) => {
    return (

        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 1.49992C15.5 1.81977 15.3779 2.13977 15.1338 2.38351L8.88379 8.63351C8.39551 9.1218 7.60449 9.1218 7.11621 8.63351L0.866211 2.38351C0.37793 1.89523 0.37793 1.10422 0.866211 0.615937C1.35449 0.127656 2.14551 0.127656 2.63379 0.615937L8 5.98234L13.3672 0.615156C13.8555 0.126875 14.6465 0.126875 15.1348 0.615156C15.3789 0.859297 15.5 1.17961 15.5 1.49992Z" fill="black" />
        </svg>


    );
};

export default DownArrow