import Image from 'next/image'
import React from 'react'
import logo from "../public/logo.png"
import Link from 'next/link'
import { useRouter } from 'next/router';
import { ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline"
import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';

const Header = () => {
    const activeStyle = {
        fontWeight: 'bold',
        color: 'blue',
    };
    return (
        <motion.div className='flex p-4 items-center justify-between bg-primary-100 mb-2 drop-shadow-xl'
            variants={navVariants}
            initial="hidden"
            whileInView="show"
        >
            <div className='flex gap-4 items-center'>
                <div>
                    <Image src={logo} width="180" height="180" alt='logo' />
                </div>
                <div className='flex items-center gap-x-4'>
                    <ul className='flex gap-3'>
                        <li className='inline-block'>
                            <ActiveLink href="/" activeStyle={activeStyle}>
                                خانه
                            </ActiveLink>
                        </li>
                        <li className='inline-block'>
                            <ActiveLink href="/shop" activeStyle={activeStyle}>
                                فروشگاه
                            </ActiveLink></li>
                        <li className='inline-block'>
                            <ActiveLink href="/blogs" activeStyle={activeStyle}>
                                بلاگ
                            </ActiveLink></li>
                    </ul>
                    <div>
                        <input className='textField__input' placeholder='جستجو...' />
                    </div>
                </div>
            </div>
            <div className='flex gap-2'>
                <div>
                    <UserIcon className='w-6 h-6' />
                </div>
                <div>
                    <ShoppingCartIcon className='w-6 h-6' />
                </div>
            </div>
        </motion.div>
    )
}

export default Header

const ActiveLink = ({ href, children, activeStyle }) => {

    const { asPath } = useRouter();

    // Determine if the current link is active
    const isActive = asPath === href;

    // Apply the active style if the link is active
    const style = isActive ? activeStyle : {};

    return (
        <Link href={href} style={style} className='text-xl'>
            {children}
        </Link>
    );
};




