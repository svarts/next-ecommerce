"use client";
import CustomButton from './CustomButton';

function Hero() {
    const handleScroll = () => { }
    return (
        <div className='hero'>
            <div className='flex-1 pt-36 padding-x'>
                <h1 className='hero__title'>
                    FutureTech Store: Explore the Latest Gadgets and Gizmos!
                </h1>

                <p className='hero__subtitle'>
                    Explore FutureTech Store for the latest gadgets and embrace innovation today!
                </p>

                <CustomButton
                    title="Explore"
                    containerStyles="bg-neutral-900 text-white rounded-full mt-10"
                    handleClick={handleScroll}
                />
            </div>
        </div>
    )
}

export default Hero