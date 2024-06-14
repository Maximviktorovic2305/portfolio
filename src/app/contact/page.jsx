'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const ContactPage = () => {
	const text = 'Напиши мне'

	return (
		<motion.div
			className='h-full'
			initial={{ y: '-200vh' }}
			animate={{ y: '0%' }}
			transition={{ duration: 1 }}>
			<div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
				{/* TEXT CONTAINER */}
				<div className='h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl'>
					<div>
						{text.split('').map((letter, index) => (
							<motion.span
								key={index}
								initial={{ opacity: 1 }}
								animate={{ opacity: 0 }}
								transition={{
									duration: 3,
									repeat: Infinity,
									delay: index * 0.1,
								}}>
								{letter}
							</motion.span>
						))}
						😊
					</div>
				</div>
				{/* FORM CONTAINER */}
				<form className='h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col md:gap-8 justify-around md:p-24'>
					<div>
						<div className='mb-4 font-bold'>Мой Telegram:</div>
						<Link href='https://t.me/maximviktorovic2305'>
							<div className='underline cursor-pointer text-base'>
								https://t.me/maximviktorovic2305
							</div>
						</Link>
					</div>
					<div>
						<div className='mb-4 font-bold'>Мой почтовый адрес:</div>
						<div className='underline text-base'>Maximviktorovic@mail.ru</div>
					</div>
					<div>
						<div className='mb-4 font-bold'>Мой Github:</div>
						<Link href='https://github.com/Maximviktorovic2305'>
							<div className='underline cursor-pointer text-base'>
								https://github.com/Maximviktorovic2305
							</div>
						</Link>
					</div>
				</form>
			</div>
		</motion.div>
	)
}

export default ContactPage
