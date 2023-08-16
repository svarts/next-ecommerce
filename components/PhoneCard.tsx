"use client";
import { useState } from 'react';
import Image from 'next/image';
import { PhoneProps } from '@/types';
import CustomButton from './CustomButton';

interface PhoneCardProps {
    phone: PhoneProps;
}

const PhoneCard = ({ phone }: PhoneCardProps) => {
    const { image, title, price, year } = phone;
    return (
        <div className='car-card group'>
            <div className='car-car__content'>
                <img src={image} className="ml-20" width={120} height={120} alt="data-image"/>
                <h2 className='car-card__content-title '>
                    {title}
                </h2>
            </div>
            <p className='flex mt-6 text-[32px] font-extrabold'>
                <span>
                    {price}
                </span>
            </p>
        </div>
    )
}

export default PhoneCard