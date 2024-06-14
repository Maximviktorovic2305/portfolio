"use client";

import Image from "next/image";
import Link from "next/link";

const PortfolioPage = () => {
   return (
      <div className="text-center pt-5 overflow-y-auto sm:px-[50px] bg-gradient-to-b from-blue-100 to-red-100">
         <span className=" text-3xl text-gray-800">Мои работы</span>

         <div className="lg:px-[200px] md:px-[100px] mt-4 flex items-center justify-around flex-wrap">
            <div className="overflow-hidden flex flex-col gap-3 mb-5">
               <span className=" text-[16px] bg-blue-900 rounded text-white">
                  Приложение расходов
               </span>
               <div className="hover:scale-105 duration-500">
                  <Link href="http://85.143.216.62:4350">
                     <Image width={270} height={180} src="/111.png" alt="#" />
                  </Link>
               </div>
            </div>
            <div className="overflow-hidden flex flex-col gap-3 mb-5">
               <span className="text-[16px] bg-blue-900 rounded text-white z-auto">
                  Интернет магазин
               </span>
               <div className="hover:scale-105 duration-500 h-full w-full">
                  <Link href="http://85.143.216.62:3000">
                     <Image width={270} height={180} src="/222.png" alt="#" />
                  </Link>
               </div>
            </div>
            <div className="overflow-hidden flex flex-col gap-3 mb-5">
               <span className=" text-[16px] bg-blue-900 rounded text-white">
                  Социальная сеть
               </span>
               <div className="hover:scale-105 duration-500">
                  <Link href="http://85.143.216.62:4450">
                     <Image width={270} height={180} src="/333.png" alt="#" />
                  </Link>
               </div>
            </div>
            <div className="overflow-hidden flex flex-col gap-3 mb-5">
               <span className=" text-[16px] bg-blue-900 rounded text-white">
                  Аренда машин
               </span>
               <div className="hover:scale-105 duration-500">
                  <Link href="http://85.143.216.62:5000">
                     <Image width={270} height={180} src="/444.png" alt="#" />
                  </Link>
               </div>
            </div>

            <div className="overflow-hidden relative group flex flex-col gap-3 mb-5">
               <span className=" text-[16px] bg-blue-900 rounded text-white">
                  React native app видеосеть
               </span>
               <div className="w-[270px] h-[180px] group-hover:scale-105 duration-500">
                  <Link href="https://disk.yandex.ru/d/-ihB8OdQYcOJRA">
                     <Image
                        width={270}
                        height={180}
                        src="/social.png"
                        alt="#"
                     />
                  </Link>
               </div>
               <div className="hidden absolute top-[18%] left-[62%] group-hover:block w-[270px] h-[180px] overflow-hidden">
                  <Link href="http://qrcoder.ru/code/?https%3A%2F%2Fdisk.yandex.ru%2Fd%2F-ihB8OdQYcOJRA&4&0">
                     <Image width={100} height={100} src="/qr.jpeg" alt="#" />
                  </Link>
               </div>
            </div>

            <div className="overflow-hidden flex flex-col gap-3 mb-5">
               <span className=" text-[16px] bg-blue-900 rounded text-white">
                  Простенький чат
               </span>
               <div className="hover:scale-105 duration-500">
                  <Link href="http://85.143.216.62:7778">
                     <Image width={270} height={180} src="/555.png" alt="#" />
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default PortfolioPage;
