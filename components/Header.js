import Image from 'next/image'
import React, { useEffect } from 'react'
import logo from "../public/logo.png"
import Link from 'next/link'
import { useRouter } from 'next/router';
import { Bars3CenterLeftIcon, ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline"
import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';
import AppDrawer from "../components/Drawer"
import { useUIContext } from '../context/uiContext.js';
import { useMediaQuery } from '@mui/material';
import AccountMenu from './AcountMenu';
import CartWithBadge from './CartIcon';
import { useDispatch, useSelector } from 'react-redux';
import { getTotals } from '../features/cartSlice';
import { ToastContainer } from 'react-toastify';

const Header = () => {
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    useEffect(() => {
        dispatch(getTotals());
    }, [])


    const { setDrawerOpen } = useUIContext();

    const activeStyle = {
        fontWeight: 'bold',
        color: 'blue',
    };
    return (
        <motion.div className='flex p-4 bg-gradient-to-r from-slate-700 to-slate-950 items-center justify-between bg-primary-100 mb-4 drop-shadow-xl'
            variants={navVariants}
            initial="hidden"
            whileInView="show"
        >

            <div className='flex gap-4 items-center'>
                <div>
                    <Image src={logo} width="180" height="180" alt='logo' />
                </div>
                <div className='flex items-center gap-x-4 text-slate-50'>
                    {!isSmallScreen && <ul className='flex gap-3'>
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
                    </ul>}
                </div>
            </div>
            <div className='flex gap-2 items-center justify-around px-1'>
                <div>
                    <AccountMenu />
                </div>
                <Link href="/cart">
                    <div>
                        <CartWithBadge />
                    </div>
                </Link>
                {isSmallScreen && <div className='m-2'>
                    <button onClick={() => setDrawerOpen(true)}>
                        <Bars3CenterLeftIcon className="w-6 h-6" />
                    </button>
                </div>}
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




