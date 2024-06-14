"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Homepage = () => {
   return (
      <motion.div
         className="h-full overflow-y-auto"
         initial={{ y: "-200vh" }}
         animate={{ y: "0%" }}
         transition={{ duration: 1 }}>
         <div className="h-full flex flex-col gap-8 lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
            <div className="h-1/2 lg:h-full lg:w-1/2 relative">
               <Image src="/1.png" alt="" fill className="object-contain" />
            </div>
            <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-4 lg:gap-8 xl:gap-8 items-center justify-center">
               <h1 className="text-2xl md:text-4xl lg:text-6xl xl:text-6xl font-bold">
                  Добро пожаловать на мой сайт портфолио
               </h1>
               <p className="md:text-xl">
                  Здесь можно ознакомиться с моими знаниями, навыками и
                  реализованными проектами
               </p>
               <div className="pb-3">
                  <Link href="/portfolio">
                     <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                        Мои работы
                     </button>
                  </Link>

               </div>
            </div>
         </div>
      </motion.div>
   );
};

export default Homepage;
