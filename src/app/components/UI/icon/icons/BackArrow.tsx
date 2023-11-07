'use client'
import { IconSVGProps } from '@/app/types'
import React from 'react'

const BackArrow = ({ size }: IconSVGProps) => {
    return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.2501 15.5C10.7703 15.5 10.2903 15.3779 9.92471 15.1338L0.549713 8.88379C-0.182709 8.39551 -0.182709 7.60449 0.549713 7.11621L9.92471 0.866211C10.6571 0.37793 11.8437 0.37793 12.5761 0.866211C13.3085 1.35449 13.3085 2.14551 12.5761 2.63379L4.52647 8L12.5772 13.3672C13.3097 13.8555 13.3097 14.6465 12.5772 15.1348C12.211 15.3789 11.7306 15.5 11.2501 15.5Z" fill="white" />
        </svg>
    )
}

export default BackArrow