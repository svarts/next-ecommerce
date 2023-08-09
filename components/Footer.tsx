import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";

const Footer = () => {
    return (
        <footer className="flex flex-col text-white mt-5 border-t border-gray-100">
            <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
                <div className="flex flex-col justify-start items-start gap-6">
                    <Image
                    src="/nlogo.svg"
                    alt="logo"
                    width={118}
                    height={18}
                    className="object-contain"
                    />
                    <p className="text-base text-white">FutureTech 2023 <br /> All rights reverved &copy; </p>
                </div>
                <div className="footer__links">
                    {footerLinks.map((link) => (
                        <div key={link.title} className="footer__link">
                            <h3>{link.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer