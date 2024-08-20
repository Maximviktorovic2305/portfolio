'use client'

import Image from 'next/image'
import Link from 'next/link'

const PortfolioPage = () => {
	return (
		<div className='text-center  py-5 overflow-y-auto overflow-x-hidden sm:px-[50px] w-full bg-gradient-to-b from-blue-100 to-red-100'>
			<span className=' text-3xl text-gray-800'>Мои работы</span>

			<div className='lg:px-[200px] md:px-[100px] mt-4 grid md:grid-cols-3 sm:grid-cols-2  grid-cols-3 gap-10 '>
				<div className='overflow-hidden flex flex-col gap-3 '>
					<span className=' text-[16px] bg-blue-900 rounded text-white shadow-md shadow-blue-800'>
						Расходы React + Nest
					</span>
					<div className='hover:scale-105 duration-500 overflow-hidden '>
						<Link href='https://costs.telemost.online'>
							<img
								className='object-cover h-[200px] w-full'
								src='/111.png'
								alt='#'
							/>
						</Link>
					</div>
				</div>
				<div className='overflow-hidden flex flex-col gap-3 '>
					<span className='text-[16px] bg-blue-900 rounded text-white z-auto shadow-md shadow-blue-800'>
						Магазин Next + Nest
					</span>
					<div className='hover:scale-105 duration-500 h-full w-full'>
						<Link href='https://amazon.telemost.online'>
							<img
								className='object-cover h-[200px] w-full'
								src='/222.png'
								alt='#'
							/>
						</Link>
					</div>
				</div>
				<div className='overflow-hidden flex flex-col gap-3 '>
					<span className=' text-[16px] bg-blue-900 rounded text-white shadow-md shadow-blue-800'>
						Соц. сеть React + Express
					</span>
					<div className='hover:scale-105 duration-500'>
						<Link href='https://posts.telemost.online'>
							<img
								className='object-cover h-[200px] w-full'
								src='/333.png'
								alt='#'
							/>
						</Link>
					</div>
				</div>
				<div className='overflow-hidden flex flex-col gap-3 '>
					<span className=' text-[16px] bg-blue-900 rounded text-white shadow-md shadow-blue-800'>
						Аренда Next + Graphql Appwrite
					</span>
					<div className='hover:scale-105 duration-500'>
						<Link href='https://cars.telemost.online'>
							<img
								className='object-cover h-[200px] w-full'
								src='/444.png'
								alt='#'
							/>
						</Link>
					</div>
				</div>

				<div className='overflow-hidden relative group flex flex-col gap-3 '>
					<span className=' text-[16px] bg-blue-900 rounded text-white shadow-md shadow-blue-800'>
						React native app
					</span>
					<div className='w-full h-[200px] group-hover:scale-105 duration-500'>
						<Link href='https://disk.yandex.ru/d/-ihB8OdQYcOJRA'>
							<img
								className='object-cover h-[200px] w-full'
								src='/social.png'
								alt='#'
							/>
						</Link>
					</div>
					<div className='hidden absolute top-[18%] left-[62%] group-hover:block w-[270px] h-[180px] overflow-hidden'>
						<Link href='http://qrcoder.ru/code/?https%3A%2F%2Fdisk.yandex.ru%2Fd%2F-ihB8OdQYcOJRA&4&0'>
							<Image width={100} height={100} src='/qr.jpeg' alt='#' />
						</Link>
					</div>
				</div>

				<div className='overflow-hidden flex flex-col gap-3 '>
					<span className=' text-[16px] bg-blue-900 rounded text-white shadow-md shadow-blue-800'>
						Простой чат React
					</span>
					<div className='hover:scale-105 duration-500'>
						<Link href='https://chat.telemost.online'>
							<img
								className='object-cover h-[200px] w-full'
								src='/555.png'
								alt='#'
							/>
						</Link>
					</div>
				</div>
				<div className='overflow-hidden flex flex-col gap-3 w-full h-full'>
					<span className=' text-[16px] bg-blue-900 rounded text-white shadow-md shadow-blue-800'>
						Лэндинг Vue3
					</span>
					<div className='hover:scale-105 duration-500 w-full'>
						<Link href='https://marketplace.telemost.online'>
							<img
								className='object-cover h-[200px] w-full'
								src='/777.png'
								alt='#'
							/>
						</Link>
					</div>
				</div>
				<div className='overflow-hidden flex flex-col gap-3 mb-5'>
					<span className=' text-[16px] bg-blue-900 rounded text-white shadow-md shadow-blue-800'>
						Лэндинг Vue3
					</span>
					<div className='hover:scale-105 duration-500'>
						<Link href='https://removals.telemost.online'>
							<img
								className='object-cover h-[200px] w-full'
								src='/888.png'
								alt='#'
							/>
						</Link>
					</div>
				</div>
				<div className='overflow-hidden flex flex-col gap-3 '>
					<span className=' text-[16px] bg-blue-900 rounded text-white shadow-md shadow-blue-800'>
						Поиск продуктов Vue3
					</span>
					<div className='hover:scale-105 duration-500'>
						<Link href='https://meals.telemost.online'>
							<img
								className='object-cover h-[200px] w-full'
								src='/999.png'
								alt='#'
							/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PortfolioPage
