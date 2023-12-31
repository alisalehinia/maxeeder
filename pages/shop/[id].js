import React, { useEffect, useState } from 'react'
import productJson from "../../db/index"
import { useRouter } from 'next/router'
import Image from 'next/image';
import { ChevronDownIcon, ChevronUpIcon, ShieldCheckIcon, StarIcon } from '@heroicons/react/24/outline';

import { useDispatch } from 'react-redux';
import { addToCart, getTotals } from '../../features/cartSlice';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Card from '../../components/Card';
import { useMediaQuery } from '@mui/material';
import Link from 'next/link';

const desc = `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
`

const ProductDetailPage = () => {

    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        dispatch(getTotals());
    };

    const router = useRouter();

    const [currentProduct, setCurrentProduct] = useState();
    const [relatedProducts, setRelatedProducts] = useState([])

    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    useEffect(() => {
        const selectedProduct = productJson.filter(product => product.id == router.query.id);
        setCurrentProduct(selectedProduct[0]);
    }, [router.query.id, currentProduct]);

    useEffect(() => {
        const sameProducts = productJson.filter(item => item?.category == currentProduct?.category);
        setRelatedProducts(sameProducts)

    }, [currentProduct])


    if (!currentProduct) {
        return <div>
            loading ...
        </div>
    }
    //  isXLargeScreen ? 5 : isLargeScreen ? 4 : isMediumScreen ? 3 : isSmallScreen ? 2 : 1
    return (
        <>
            <div className='bg-slate-50 flex flex-col md:flex-row mb-2 mt-2'>
                <div className='md:w-1/4 w-10/12 rounded-md m-2 overflow-hidden mx-auto '>
                    <Image width={400} height={400} src={currentProduct.img} alt={currentProduct.title} className='mx-auto' />
                </div>
                <div className='flex-1 m-1 '>
                    <h2 className='text-slate-800 font-bold text-2xl mb-2 text-center md:text-right'>{currentProduct.title}</h2>
                    <div className='border-b ' />
                    <div className='flex items-center gap-4 p-2'>
                        <div className='flex items-center'>
                            <span>امتیاز: {currentProduct.score} </span>
                            <StarIcon className='text-yellow-500 w-6 h-6' />
                        </div>
                        <div>
                            نظرات: {currentProduct.reviews}
                        </div>
                    </div>
                    <div className='bg-slate-100 rounded-lg p-2 mx-2'>
                        <div className='mb-1'>
                            شرکت سازنده: {currentProduct.company}
                        </div>
                        <div className='mb-1'>
                            رنگ:{currentProduct.color}
                        </div>
                        <div className='mb-1'>
                            دسته بندی: {currentProduct.category}
                        </div>
                    </div>
                    <div className='bg-white p-3 leading-7 relative mb-8'>
                        <div className='border rounded-md p-2 '>
                            {expanded ? desc :

                                <p>{desc.substring(0, 400)}</p>
                            }
                        </div>
                        <div className='absolute  z-20 left-1/2 right-1/2 -bottom-7'>
                            <button className='bg-primary-600 opacity-40 p-4 rounded-full ' onClick={() => handleExpandClick()}>
                                {
                                    expanded ? <ChevronUpIcon className='w-6 h-6 text-white' /> :
                                        <ChevronDownIcon className='w-6 h-6 text-white' />
                                }
                            </button>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/4 w-10/12 mx-auto shadow-custom m-2 rounded-lg p-1 h-[18rem]'>
                    <div className='flex items-center justify-around mb-2 '>
                        <h3 className='text-center text-primary-800 font-light text-2xl'>فروشنده:</h3>
                        <p className='text-center'>{currentProduct.company}</p>
                    </div>
                    <div className='border-b mb-2' />
                    <div className='flex items-center justify-around mb-2'>
                        <ShieldCheckIcon className='text-green-500 w-6 h-6' />
                        <span>گارانتی اصالت و سلامت فیزیکی کالا</span>
                    </div>
                    <div className='border-b mb-2' />
                    <div className='flex justify-center text-left flex-col gap-y-3'>
                        <del className='p-2'>{currentProduct.prevPrice}</del>
                        <div className='border-b mb-2' />
                        <div className='flex items-center justify-around bg-secondary-200 p-2 rounded-lg'>
                            <span className='text-lg'>قیمت:</span>
                            <span className='font-bold text-2xl text-primary-800'>{currentProduct.newPrice}</span>
                        </div>
                        <button className='btn btn--primary' onClick={() => handleAddToCart(currentProduct)}>افزودن به سبد</button>
                    </div>
                </div>
            </div>
            {relatedProducts ? <div className=' w-full bg-slate-100 mb-4' onClick={() => handleAddToCart(currentProduct)}>
                <h4 className='text-xl font-semibold text-center py-2 text-slate-800'>محصولات مشابه در دسته بندی {currentProduct.category}</h4>
                <Swiper
                    className=''
                    spaceBetween={50}
                    slidesPerView={1}
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                            width: 640,
                            slidesPerView: 1,
                        },
                        // when window width is >= 768px
                        768: {
                            width: 768,
                            slidesPerView: 2,
                        },
                    }}

                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        relatedProducts.map(product => (
                            <SwiperSlide key={product.id} className='mb-6'>
                                <Link href={`/shop/${product.id}`} key={Math.random()}>
                                    <div className=''>
                                        <Card product={product} />
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div> : <p className='p-4 w-full'>loading ...</p>}
        </>
    )
}

export default ProductDetailPage