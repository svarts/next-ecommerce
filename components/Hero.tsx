"use client";
import CustomButton from './CustomButton';

const Hero = () => {
    const handleScroll = () => { }
    return (
        <div className='hero'>
            <div className='flex-1 pt-36 pl-28'>
                <h1 className='hero__title'>
                    FutureTech Store: Explore the Latest Gadgets and Gizmos!
                </h1>

                <p className='hero__subtitle'>
                    Explore FutureTech Store for the latest gadgets and embrace innovation today!
                </p>

                <CustomButton
                    title="Explore"
                    containerStyles="text-black font-bold bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-10 mt-10"
                    handleClick={handleScroll}
                />
            </div>
            <div className='hero__image-container'>
                <div className='hero__image'>
                    <img className="mt-60 object-contain" src=" /hero.jpg" alt='hero'/>
                </div>
            </div>
        </div>
    )
}

export default Hero