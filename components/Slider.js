import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Image from 'next/image';
import image from "../public/image1.jpg"
import logo from "../public/logo.png"

import { motion } from 'framer-motion';


export default function Slider({ slides }) {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {
                slides.map(slide => (<SwiperSlide key={slide.image} >
                    <div className="bg-slate-200 w-[90vw] flex justify-center md:flex-row items-center flex-wrap mx-auto  max-w-7x mb-16">
                        {/*   image */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0.5 }}
                            animate={{ rotate: 360, scale: 1, opacity: 1 }}
                            transition={{
                                type: "spring",
                                duration: 3
                            }}

                            className="rounded-md w-[80%]  md:w-1/3 p-4 flex ">
                            <Image src={image} alt="slider image" width="100%" height="100%" className="rounded-md w-full  object-cover md:object-contain " />
                        </motion.div>
                        <motion.div className="rounded-md mx-auto p-4 font-semibold leading-8 w-full md:w-1/2 flex flex-col "
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <h4 className='font-bold text-3xl mb-4'>{slide.title}</h4>
                            <div className='mb-8'>
                                {slide.text}
                            </div>
                            <button className='btn btn--primary '>برو به فروشگاه</button>
                        </motion.div>
                    </div>
                </SwiperSlide>))
            }
        </Swiper>
    );
};