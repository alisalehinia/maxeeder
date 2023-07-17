import Image from "next/image";
import logo from "../public/logo.png"
import image from "../public/image1.jpg"

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { BookmarkIcon, HeartIcon } from "@heroicons/react/24/outline";

import { useInView } from 'react-intersection-observer';
import Slider from "../components/Slider";
import { fadeIn, navVariants, planetVariants, staggerContainer } from "../utils/motion";

import productsJson from "../db/index"
import Card from "../components/Card";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { getTotals, loadCartItemsFromLocalStorage } from "../features/cartSlice";

const slides = [
  {
    image: "/public/image1.jpg",
    title: "لورم ایپسوم1",
    text: "لورم ایپسوم که گاهی اوقات به آن  نیز گفته می‌شود، متن مکان نگهدار مورد استفاده در طراحی هنگام ایجاد محتوا است."
  },
  {
    image: "/public/image1.jpg",
    title: "لورم ایپسوم2",
    text: "لورم ایپسوم که گاهی اوقات به آن  نیز گفته می‌شود، متن مکان نگهدار مورد استفاده در طراحی هنگام ایجاد محتوا است."
  },
  {
    image: "/public/image1.jpg",
    title: "لورم ایپسوم3",
    text: "لورم ایپسوم که گاهی اوقات به آن  نیز گفته می‌شود، متن مکان نگهدار مورد استفاده در طراحی هنگام ایجاد محتوا است."
  },
  {
    image: "/public/image1.jpg",
    title: "لورم ایپسوم4",
    text: "لورم ایپسوم که گاهی اوقات به آن  نیز گفته می‌شود، متن مکان نگهدار مورد استفاده در طراحی هنگام ایجاد محتوا است."
  },
  {
    image: "/public/image1.jpg",
    title: "لورم ایپسوم5",
    text: "لورم ایپسوم که گاهی اوقات به آن  نیز گفته می‌شود، متن مکان نگهدار مورد استفاده در طراحی هنگام ایجاد محتوا است."
  }
]



const topProducts = productsJson.filter(product => product.score >= 4);

export default function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCartItemsFromLocalStorage());
    dispatch(getTotals())
  }, [dispatch]);

  const controls = useAnimation();

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, x: 500 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="bg-slate-200 opacity-100">

      <Slider slides={slides} />
      {/* top products */}
      <motion.h4 className="text-secondary-800 font-extrabold text-2xl m-2 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >محصولات پر طرفدار</motion.h4>
      <div className="bg-slate-100 sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280] mx-auto flex justify-between flex-wrap p-8 mb-8">
        {/* { img, title, star, reviews, prevPrice, newPrice, score } */}
        {
          topProducts.map((product) => {
            return <Card
              key={Math.random()}
              product={product}
            />
          })
        }
      </div>
      {/* categories */}
      <motion.h4 className="text-secondary-800 font-extrabold text-2xl m-2 text-center "
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ duration: 1 }}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >دسته بندی ها </motion.h4>
      <motion.div className="bg-slate-50 sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280] mx-auto flex justify-between flex-wrap p-8"
        // initial={{ x: 500, opacity: 0 }}
        // animate={controls}
        // transition={{ duration: 0.5, delay: 0.2 }}
        variants={fadeIn('right', 'tween', 0.2, 1)}
      >
        {
          [1, 2, 3, 4, 5, 6, 7, 8].map((category, index) =>
          (<motion.div key={index}
            // variants={fadeIn('up', 'tween', 0.3, 1)}
            variants={navVariants}
            initial="hidden"
            whileInView="show"
            className="bg-white rounded-lg m-2 p-2 sm:w-[200px] md:w-[250px] lg:w-[300px] shadow-lg shadow-purple-300 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
            نام دسته بندی
          </motion.div>))
        }
      </motion.div>
      {/* partnership sites */}
      <motion.h4 className="text-secondary-800 font-extrabold text-2xl m-2 text-center "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >سایت های همکار </motion.h4>
      <motion.div className="bg-slate-100 sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280] mx-auto flex justify-between flex-wrap p-8 "
        initial={{ x: 500, opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {
          [1, 2, 3, 4, 5, 6, 7, 8].map((category, index) =>
          (<div key={index} dir="ltr" className="bg-white rounded-lg m-2 p-2 sm:w-[200px] md:w-[250px] lg:w-[300px] drop-shadow-2xl flex items-center justify-between shadow-lg shadow-purple-300">
            <div>
              site address
            </div>
          </div>))
        }
      </motion.div>
    </div>
  )
}


{/*  (<motion.div key={product.id} className="rounded-lg bg-white m-2 sm:w-[200px] md:w-[250px] lg:w-[300px] drop-shadow-2xl "
            ref={ref}
            variants={variants}
            initial={{ x: 500, opacity: 0 }}
            animate={inView ? 'visible' : 'hidden'}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-full  pb-2 ">
              <Image src={image} alt="product image" className="overflow-hidden p-1  h-80 rounded-lg object-cover " />
            </div>
            <h5 className="font-bold text-xl text-primary-900 p-2">{product.name}</h5>
            <div className="p-2">
              {product.desc}
            </div>
            <div className="w-full flex gap-2 p-4 font-semibold text-primary-900">
              <span>قیمت:</span>{product.price}<span>تومان</span>
            </div>
            <div className="w-full flex justify-between p-2 items-center">
              <button className="btn btn--primary m-1 flex-1 ">افزودن به سبد</button>
              <div>
                <button className="btn">
                  <HeartIcon className="h-5 w-5 text-red-500 " />
                </button>
                <button className="btn">
                  <BookmarkIcon className="h-5 w-5 text-green-500 " />
                </button>
              </div>

            </div>
          </motion.div>)) */}