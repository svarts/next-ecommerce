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
                <img src={image} alt=""/>
                <h2 className=''>
                    {title}
                </h2>
            </div>
        </div>
    )
}

export default PhoneCard