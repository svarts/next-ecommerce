"use client";
import { useState, Fragment } from 'react';
import  Image  from 'next/image';
import { SearchManufacturerProps } from '@/types';
import { Combobox, Transition } from '@headlessui/react';
import { manufacturers } from '@/constants';

const SearchManifacturer = ({manufacturer, setManifacturer}: SearchManufacturerProps ) => {
    const [query, setQuery] = useState('');
    const filteredManufacturers = query === "" 
    ? manufacturers 
    : manufacturers.filter((item) => (
        item.toLowerCase()
        .replace(/\s+/g, "")
        .includes(query.toLocaleLowerCase().replace(/\s+/g, ""))
    ))
    return (
        <div className='search-manufacturer'>
            <Combobox>
                <div className='relative w-full'>
                    <Combobox.Button className="absolute top-[14px]">
                        <Image 
                            src="/brand.png"
                            width={22}
                            height={22}
                            className="ml-4"
                            alt='brand'
                        />
                    </Combobox.Button>
                    <Combobox.Input 
                        className="search-manufacturer__input border"
                        placeholder='Iphone'
                        displayValue={(manufacturer: string) => manufacturer}
                        onChange={(e) => setQuery(e.target.value)}
                    />

                    <Transition 
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options>

                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}

export default SearchManifacturer