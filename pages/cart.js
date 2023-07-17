import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decreaseCart, getTotals, loadCartItemsFromLocalStorage } from '../features/cartSlice';
import Image from 'next/image';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';

const Cart = () => {
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
    console.log(cart);
    return (
        <>
            <h1 className='w-full text-center font-bold text-2xl text-slate-800' >سبد خرید</h1>
            <div className='bg-slate-500 md:m-2'>
                {
                    cart.cartItems.map((item) => (
                        <div key={item.id} className='bg-white rounded-lg shadow-custom p-4 border m-2 flex items-center justify-between'>
                            <div>
                                <Image width={100} height={100} src={item.img} alt={item.title} />
                            </div>
                            <div>
                                نام محصول: {item.title}
                            </div>
                            <div>
                                دسته بندی: {item.category}
                            </div>
                            <div>
                                تعداد: {item.cartQuantity}
                            </div>
                            <div>
                                قیمت هر واحد: {item.newPrice} تومان
                            </div>
                            <div>
                                <button onClick={() => addIProductHandler(item)}>
                                    <PlusIcon className='w-6 h-6' />
                                </button>
                                <span>{item.cartQuantity}</span>
                                <button onClick={() => decreaseProductHandler(item)}>
                                    <MinusIcon className='w-6 h-6' />
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Cart