import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, clearCart, decreaseCart, getTotals, loadCartItemsFromLocalStorage, removeFromCart } from '../features/cartSlice';
import Image from 'next/image';
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Input from '../components/Input';
import Link from 'next/link';
import { useMediaQuery } from '@mui/material';

const Cart = () => {
    const isSmallScreen = useMediaQuery('(max-width:768px)');

    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadCartItemsFromLocalStorage());
        dispatch(getTotals());
    }, []);

    const addIProductHandler = (product) => {
        dispatch(addToCart(product));
        dispatch(getTotals());
    }

    const decreaseProductHandler = (product) => {
        dispatch(decreaseCart(product));
        dispatch(getTotals());
    }
    const reMoveProduct = (product) => {
        dispatch(removeFromCart(product));
        dispatch(getTotals());
    }
    const reMoveCart = () => {
        dispatch(clearCart());
        dispatch(getTotals());
    }
    console.log(cart);
    return (
        <>
            <h1 className='w-full text-center font-bold text-2xl text-slate-800 mb-4' >سبد خرید</h1>
            <div className=' md:m-2 flex flex-wrap flex-col md:flex-row'>
                <div className='flex-1'>
                    {
                        cart.cartItems.length === 0 ?
                            <div className='flex flex-col'>
                                <h2 className='text-center text-3xl font-bold text-slate-800 mb-2'>سبد خرید خالی است.</h2>
                                <Link className='text-center text-blue-600 text-2xl font-extrabold' href="/shop">برو به فروشگاه</Link>
                            </div> :
                            cart.cartItems.map((item) => (
                                <Link href={`/shop/${item.id}`} key={item.id}>
                                    <div className='bg-slate-50 rounded-lg shadow-custom p-4 border m-2 flex gap-4 flex-wrap items-center justify-between flex-1'>
                                        <div>
                                            <Image width={isSmallScreen ? 100 : 200} height={isSmallScreen ? 100 : 200} src={item.img} alt={item.title} />
                                        </div>
                                        <div className='w-full md:w-auto'>
                                            نام محصول: {item.title}
                                        </div>
                                        <div className='w-full md:w-auto'>
                                            دسته بندی: {item.category}
                                        </div>
                                        <div className='w-full md:w-auto'>
                                            تعداد: {item.cartQuantity}
                                        </div>
                                        <div className='w-full md:w-auto'>
                                            قیمت هر واحد: {item.newPrice} تومان
                                        </div>
                                        <div className='flex justify-center items-center gap-x-2'>
                                            <button className='p-1 bg-green-600 text-white rounded-full' onClick={() => addIProductHandler(item)}>
                                                <PlusIcon className='w-5 h-5' />
                                            </button>
                                            <span>{item.cartQuantity}</span>
                                            <button className='p-1 bg-red-600 text-white rounded-full' onClick={() => decreaseProductHandler(item)}>
                                                <MinusIcon className='w-5 h-5' />
                                            </button>
                                            <button className='p-1 bg-red-400 text-white rounded-full' onClick={() => reMoveProduct(item)}>
                                                <TrashIcon className='w-5 h-5' />
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                            ))
                    }
                </div>

                {cart.cartItems.length !== 0 && <div className='bg-slate-100 p-2 rounded-lg h-96 mt-2 shadow-custom'>
                    <h2 className='text-center font-extrabold text-lg mb-2 p-1 border-b'>صورت حساب</h2>
                    <div className='flex items-center  mb-2 p-1 border-b ' >
                        <label for="discount" className="block">کد تخفیف:</label>
                        <input id="discount" type="text"
                            className="  border border-gray-300 rounded-lg "
                            placeholder="کد تخفیف را وارد کنید" />
                    </div>
                    <div className='p-2 border-b mb-2'>
                        <div className='w-full flex justify-between mb-1 font-extrabold text-lg text-slate-800'>
                            <span>جمع کل: </span><span><span className='m-1'>{cart.cartTotalAmount}</span>تومان</span>
                        </div>
                        <div className='w-full flex justify-between font-extrabold text-lg text-red-600'>
                            <span>تخفیف: </span>{0}
                        </div>
                    </div>
                    <div className='p-2'>
                        <div className='flex justify-between items-center mb-4'>
                            <span className='font-extrabold text-slate-800 text-xl'>قابل پرداخت: </span><span>{cart.cartTotalAmount}</span>
                        </div>
                        <button className='btn btn--primary w-full mb-4'>پرداخت سفارش</button>
                        <button className='btn bg-red-500 w-full text-white' onClick={() => reMoveCart()}> حذف سبد خرید </button>
                    </div>
                </div>}
            </div>
        </>
    )
}

export default Cart