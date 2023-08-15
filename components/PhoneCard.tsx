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
        <div>PhoneCard</div>
    )
}

export default PhoneCard