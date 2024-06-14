'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import NavLink from './navLink'

const links = [
	{ url: '/', title: 'Главная' },
	{ url: '/about', title: 'Навыки' },
	{ url: '/portfolio', title: 'Портфолио' },
	{ url: '/contact', title: 'Контакты' },
]

const Navbar = () => {
	const [open, setOpen] = useState(false)

	const topVariants = {
		closed: {
			rotate: 0,
		},
		opened: {
			rotate: 45,
			backgroundColor: 'rgb(255,255,255)',
		},
	}
	const centerVariants = {
		closed: {
			opacity: 1,
		},
		opened: {
			opacity: 0,
		},
	}

	const bottomVariants = {
		closed: {
			rotate: 0,
		},
		opened: {
			rotate: -45,
			backgroundColor: 'rgb(255,255,255)',
		},
	}

	const listVariants = {
		closed: {
			x: '100vw',
		},
		opened: {
			x: 0,
			transition: {
				when: 'beforeChildren',
				staggerChildren: 0.2,
			},
		},
	}

	const listItemVariants = {
		closed: {
			x: -10,
			opacity: 0,
		},
		opened: {
			x: 0,
			opacity: 1,
		},
	}

	return (
		<div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
			{/* LINKS */}
			<div className='hidden md:flex gap-4 w-1/3'>
				{links.map(link => (
					<span key={link.title} className='inline px-2 py-2 text-sm'>
						<NavLink link={link} key={link.title} />
					</span>
				))}
			</div>
			{/* LOGO */}
			<div className='md:hidden lg:flex xl:w-1/3 xl:justify-center'>
				<Link
					href='/'
					className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center'>
					<span className='text-white mr-1'>Frontend</span>
					<span className=' h-8 rounded bg-white text-black flex items-center justify-center'>
						Backend
					</span>
				</Link>
			</div>
			{/* SOCIAL */}
			<div className='hidden md:flex gap-20 w-1/3'>
				<Link href='https://github.com/Maximviktorovic2305'>
					<Image src='/github.png' alt='' width={30} height={30} />
				</Link>
				{/* <button
            onClick={switchTheme}
            className="inline py-2 px-3 rounded bg-secondary hover:bg-accent duration-200">
            {theme === "pastel" ? "Go night" : "Go pastel"}
         </button> */}
			</div>
			{/* RESPONSIVE MENU */}
			<div className='md:hidden'>
				{/* MENU BUTTON */}
				<button
					className='w-10 h-8 flex flex-col justify-between z-40 relative'
					onClick={() => setOpen(prev => !prev)}>
					<motion.div
						variants={topVariants}
						animate={open ? 'открыть' : 'закрыть'}
						className='w-10 h-1 bg-black rounded origin-left'></motion.div>
					<motion.div
						variants={centerVariants}
						animate={open ? 'открыть' : 'закрыть'}
						className='w-10 h-1 bg-black rounded'></motion.div>
					<motion.div
						variants={bottomVariants}
						animate={open ? 'открыть' : 'закрыть'}
						className='w-10 h-1 bg-black rounded origin-left'></motion.div>
				</button>
				{/* MENU LIST */}
				{open && (
					<motion.div
						variants={listVariants}
						initial='closed'
						animate='opened'
						className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40'>
						{links.map(link => (
							<motion.div
								variants={listItemVariants}
								className=''
								key={link.title}>
								<Link key={link.title} href={link.url}>
									{link.title}
								</Link>
							</motion.div>
						))}
					</motion.div>
				)}
			</div>
		</div>
	)
}

export default Navbar
