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
import { fadeIn, staggerContainer } from '../utils/motion';



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
                    <motion.div className="bg-gradient-to-r from-slate-700 to-slate-950 rounded-lg w-[90vw] shadow-lg shadow-purple-300 flex justify-center md:flex-row items-center flex-wrap mx-auto  max-w-7x mb-16"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.25 }}
                    >
                        {/*   image */}
                        <motion.div
                            className="rounded-md w-[80%]  md:w-1/3 p-4 flex ">
                            <Image src={image} alt="slider image" width="100%" height="100%" className="rounded-md w-full  object-cover md:object-contain " />
                        </motion.div>
                        <motion.div className="rounded-md mx-auto p-4 font-semibold leading-8 w-full md:w-1/2 flex flex-col "
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <h4 className='font-bold text-4xl mb-4 text-slate-50'>{slide.title}</h4>
                            <motion.div className='mb-8  font-thin text-slate-50 text-sm md:text-lg'
                                variants={fadeIn('up', 'tween', 0.2, 1)}
                            >
                                {slide.text}
                            </motion.div>
                            <button className='btn btn--primary '>برو به فروشگاه</button>
                        </motion.div>
                    </motion.div>
                </SwiperSlide>))
            }
        </Swiper>
    );
};