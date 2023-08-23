"use client";
import { useState } from 'react';
import Image from 'next/image';
import { PhoneProps } from '@/types';
import CustomButton from './CustomButton';

interface PhoneCardProps {
    phone: PhoneProps;
}

const PhoneCard = ({ phone }: PhoneCardProps) => {
    const { image, title, price, year, description } = phone;
    return (
        <div className='car-card group cursor-pointer'>
            <div className='relative flex w-full mt-2'>
                    <div className='flex w-full justify-between text-gray'>
                        <div className='flex flex-col justify-center items-center gap-2' >
                            <Image
                                src="/battery.svg" alt='battery'
                                width={35}
                                height={35}
                                className='hover:text-black cursor-pointer active:translate-x-1'
                            />
                            <Image
                                src="/brand.svg" alt='battery'
                                width={35}
                                height={35}
                                className='hover:text-black cursor-pointer active:translate-x-1'
                            />
                            <Image
                                src="/storage.svg" alt='battery'
                                width={35}
                                height={35}
                                className='hover:text-black cursor-pointer active:translate-x-1'
                            />
                        </div>
                    </div>
                </div>
            <div className='car-car__content'>
                <img src={image} className="mb-10" width={150} height={150} alt="data-image" />
                <h2 className='car-card__content-title '>
                    {title}
                </h2>
            </div>
            <p className='flex mt-6 text-[32px] font-normal'>
                <span>
                    {price}
                </span>
            </p>
        </div>
    )
}

export default PhoneCard