import React from "react"

const ToolBar = () => {
	return (
		<div className='bg-black text-white p-2'>
			<div className='max-w-[1440px] mx-auto flex justify-center md:justify-end text-xs'>
				<a href='#link1' className='font-bold mx-2 underline'>
					Acesse sua conta
				</a>{" "}
				ou
				<a href='#link2' className='font-bold mx-2 underline'>
					Cadastre-se
				</a>
			</div>
		</div>
	)
}

export default ToolBar
