import { motion } from 'framer-motion';
import { socials } from "../db/index"

import { footerVariants } from "../utils/motion";
import Image from 'next/image';
import headset from "../public/headset.svg"
const Footer = () => (
    <motion.footer
        variants={footerVariants}
        initial="hidden"
        whileInView="show"
        className={` py-8 relative bg-slate-700`}
    >
        <div className="footer-gradient" />
        <div className={` mx-auto flex flex-col gap-8`}>
            <div className="flex items-center justify-between flex-wrap gap-5 px-4">
                <h4 className="font-bold md:text-[64px] text-[44px] text-white ">
                    ورود به مکسیدر
                </h4>
                <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]">
                    <span className="font-normal text-[16px] text-white">
                        ورود
                    </span>
                    <Image
                        width={200}
                        height={200}
                        src="/headset.svg"
                        alt="headset"
                        className="w-[24px] h-[24px] object-contain"
                    />
                </button>
            </div>

            <div className="flex flex-col">
                <div className="mb-[50px] h-[2px] bg-white opacity-10" />

                <div className="flex items-center justify-between flex-wrap gap-4 px-4">
                    <h4 className="font-extrabold text-[24px] text-white ">
                        Maxeeder
                    </h4>
                    <p className="font-normal text-[14px] text-white opacity-50">
                        © تمام حقوق برای maxeeder.com محفوظ است
                    </p>

                    <div className="flex gap-4">
                        {socials.map((social) => (
                            <Image
                                width={200}
                                height={200}
                                key={social.name}
                                src={social.url}
                                alt={social.name}
                                className="w-[24px] h-[24px] object-contain cursor-pointer"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </motion.footer>
);

export default Footer;
