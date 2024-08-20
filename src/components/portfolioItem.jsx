import Image from 'next/image'
import Link from 'next/link'

const PortfolioItem = ({ title, href, imageSrc, type }) => {
	return (
		<div className='overflow-hidden flex flex-col gap-3 '>
			<span className=' text-[16px] bg-blue-900 rounded text-white shadow-md shadow-blue-800'>
				{title}
			</span>
			<div className='hover:scale-105 duration-500 overflow-hidden group'>
				<Link href={href}>
					<img
						className='object-cover h-[200px] w-full'
						src={imageSrc}
						alt='#'
					/>
				</Link>
				{type === 'qrLink' && (
					<div className='hidden absolute top-[18%] left-[62%] group-hover:block w-[270px] h-[180px] overflow-hidden'>
						<Link href='http://qrcoder.ru/code/?https%3A%2F%2Fdisk.yandex.ru%2Fd%2F-ihB8OdQYcOJRA&4&0'>
							<Image width={100} height={100} src='/qr.jpeg' alt='#' />
						</Link>
					</div>
				)}
			</div>
		</div>
	)
}

export default PortfolioItem
