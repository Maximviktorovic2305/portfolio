'use client'

import PortfolioItem from '@/components/portfolioItem'
import { PORTFOLIOITEMS } from '@/constants'

const PortfolioPage = () => {
	return (
		<div className='text-center  py-5 overflow-y-auto overflow-x-hidden sm:px-[50px] w-full bg-gradient-to-b from-blue-100 to-red-100'>
			<span className=' text-3xl text-gray-800'>Мои работы</span>

			<div className='lg:px-[200px] md:px-[100px] mt-4 grid md:grid-cols-3 sm:grid-cols-2  grid-cols-3 gap-10 '>
				{PORTFOLIOITEMS.map(item => (
					<PortfolioItem
						key={item.href}
						title={item.title}
						href={item.href}
						imageSrc={item.imageSrc}
						type={item.type}
					/>
				))}
			</div>
		</div>
	)
}

export default PortfolioPage
