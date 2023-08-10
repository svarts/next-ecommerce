import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const NavBar = () => (
    <header className='w-full  absolute z-10'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
            <Link href='/' className='flex justify-center items-center'>
                <Image
                    src='/nlogo.svg'
                    alt='logo'
                    width={118}
                    height={18}
                    className='object-contain'
                />
            </Link>

            <CustomButton
                title='Sign in'
                btnType='button'
                containerStyles='text-white hover:text-white border border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-white dark:text-white dark:hover:text-black dark:hover:bg-white dark:focus:ring-white rounded-2xl min-w-[130] mt-1'
            />
        </nav>
    </header>
);

export default NavBar;