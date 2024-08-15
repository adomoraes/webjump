import React from "react"

const HeaderContent = () => {
	return (
		<header className='bg-white p-4'>
			<div className='max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center lg:items-stretch h-full'>
				<div className='w-full lg:w-1/2 flex-shrink-0 mb-4 lg:mb-0'>
					<img
						src='./media/logo.png'
						alt='Logo'
						className='h-12 lg:h-16 mx-auto lg:mx-0'
					/>
				</div>

				<div className='w-full lg:w-1/2 lg:ml-4 flex items-center justify-center'>
					<form className='flex items-center w-full'>
						<input
							type='text'
							placeholder='O que procura?'
							className='flex-grow p-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-inset focus:border-red-500 focus:ring-red-500'
						/>
						<button
							type='submit'
							className='p-2 border border-red-500 bg-red-500 text-white font-bold hover:bg-red-600 uppercase'>
							Buscar
						</button>
					</form>
				</div>
			</div>
		</header>
	)
}

export default HeaderContent
