import Image from "next/image";
import logo from "../public/logo.png"
import image from "../public/image1.jpg"

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { HeartIcon } from "@heroicons/react/24/outline";

import { useInView } from 'react-intersection-observer';
import Slider from "../components/Slider";

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



const topProducts = [
  {
    id: 1,
    name: "نام اول",
    desc: "لورم ایپسوم که گاهی اوقات به آن  نیز گفته می‌شود، متن مکان نگهدار مورد استفاده در طراحی هنگام ایجاد محتوا است.",
    price: 2590000
  },
  {
    id: 2,
    name: "نام اول",
    desc: "لورم ایپسوم که گاهی اوقات به آن  نیز گفته می‌شود، متن مکان نگهدار مورد استفاده در طراحی هنگام ایجاد محتوا است.",
    price: 267700
  },
  {
    id: 3,
    name: "نام اول",
    desc: "لورم ایپسوم که گاهی اوقات به آن  نیز گفته می‌شود، متن مکان نگهدار مورد استفاده در طراحی هنگام ایجاد محتوا است.",
    price: 2777000
  }
]
export default function Home() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ x: 0, opacity: 1 });
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, x: 500 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="bg-slate-50">
      <Slider slides={slides} />
      {/* top products */}
      <motion.h4 className="text-secondary-800 font-extrabold text-2xl m-2 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >محصولات پر طرفدار</motion.h4>
      <div className="bg-slate-100 sm:w-[600px] md:w-[900px] lg:w-[1200px] mx-auto flex justify-between flex-wrap p-8 mb-8">

        {
          topProducts.map(product =>
          (<motion.div key={product.id} className="rounded-lg bg-white m-2 sm:w-[200px] md:w-[250px] lg:w-[300px] drop-shadow-2xl"
            ref={ref}
            variants={variants}
            initial={{ x: 500, opacity: 0 }}
            animate={inView ? 'visible' : 'hidden'}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-full p-4">
              <Image src={image} alt="product image" className="overflow-hidden h-80 rounded-lg object-contain" />
            </div>
            <h5 className="font-bold text-xl text-primary-900 p-2">{product.name}</h5>
            <div className="p-2">
              {product.desc}
            </div>
            <div className="w-full flex gap-2 p-4 font-semibold text-primary-900">
              <span>قیمت:</span>{product.price}<span>تومان</span>
            </div>
            <div className="w-full flex justify-between p-2">
              <button className="btn btn--primary m-1">افزودن به سبد</button>
              <button className="btn">
                <HeartIcon className="h-5 w-5 text-red-500 " />
              </button>
            </div>
          </motion.div>))
        }
      </div>
      {/* categories */}
      <motion.h4 className="text-secondary-800 font-extrabold text-2xl m-2 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >دسته بندی ها </motion.h4>
      <motion.div className="bg-slate-100 sm:w-[600px] md:w-[900px] lg:w-[1200px] mx-auto flex justify-between flex-wrap p-8"
        initial={{ x: 500, opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {
          [1, 2, 3, 4, 5, 6, 7, 8].map((category, index) =>
          (<div key={index} className="bg-white rounded-lg m-2 p-2 sm:w-[200px] md:w-[250px] lg:w-[300px] drop-shadow-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
            نام دسته بندی
          </div>))
        }
      </motion.div>
      {/* partnership sites */}
      <motion.h4 className="text-secondary-800 font-extrabold text-2xl m-2 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >سایت های همکار </motion.h4>
      <motion.div className="bg-slate-100 sm:w-[600px] md:w-[900px] lg:w-[1200px] mx-auto flex justify-between flex-wrap p-8"
        initial={{ x: 500, opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {
          [1, 2, 3, 4, 5, 6, 7, 8].map((category, index) =>
          (<div key={index} dir="ltr" className="bg-white rounded-lg m-2 p-2 sm:w-[200px] md:w-[250px] lg:w-[300px] drop-shadow-2xl flex items-center justify-between ">
            <div>
              site address
            </div>
            <div>
              icon
            </div>
          </div>))
        }
      </motion.div>
    </div>
  )
}


