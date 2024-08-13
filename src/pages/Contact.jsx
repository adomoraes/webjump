import React, { useState } from "react"

export default function Contact() {
	const [isFormVisible, setIsFormVisible] = useState(true)
	const [formData, setFormData] = useState({
		email: "",
		subject: "",
		message: "",
	})
	const [isSubmitted, setIsSubmitted] = useState(false)

	const toggleFormVisibility = () => {
		setIsFormVisible(!isFormVisible)
	}

	const handleInputChange = (e) => {
		const { id, value } = e.target
		setFormData((prevData) => ({
			...prevData,
			[id]: value,
		}))
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log("Form Data:", formData)
		setIsSubmitted(true)
		setFormData({ email: "", subject: "", message: "" })
	}

	return (
		<>
			<div
				id='drawer-contact'
				className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${
					isFormVisible ? "translate-x-0" : "-translate-x-full"
				} bg-red-950 w-80`}
				tabIndex='-1'
				aria-labelledby='drawer-contact-label'>
				<h5
					id='drawer-label'
					className='inline-flex items-center mb-6 text-base font-semibold text-white uppercase'>
					<svg
						className='w-4 h-4 me-2.5'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='currentColor'
						viewBox='0 0 20 16'>
						<path d='m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z' />
						<path d='M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z' />
					</svg>
					Entre em contato
				</h5>
				{isSubmitted ? (
					<div className='text-white bg-green-700 p-4 my-8 rounded-lg'>
						Enviado com sucesso!
					</div>
				) : (
					<form className='mb-6' onSubmit={handleSubmit}>
						<div className='mb-6'>
							<label
								htmlFor='email'
								className='block mb-2 text-sm font-medium text-white'>
								Email
							</label>
							<input
								type='email'
								id='email'
								className='bg-red-900 border border-red-700 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
								placeholder='name@gmail.com'
								required
								onChange={handleInputChange}
								value={formData.email}
							/>
						</div>
						<div className='mb-6'>
							<label
								htmlFor='subject'
								className='block mb-2 text-sm font-medium text-white'>
								Assunto
							</label>
							<input
								type='text'
								id='subject'
								className='bg-red-900 border border-red-700 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
								placeholder='Como podemos te ajudar?'
								required
								onChange={handleInputChange}
								value={formData.subject}
							/>
						</div>
						<div className='mb-6'>
							<label
								htmlFor='message'
								className='block mb-2 text-sm font-medium text-white'>
								Mensagem
							</label>
							<textarea
								id='message'
								rows='4'
								className='bg-red-900 border border-red-700 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
								placeholder='Escreva sua mensagem...'
								onChange={handleInputChange}
								value={formData.message}></textarea>
						</div>
						<button
							type='submit'
							className='text-white bg-red-700 hover:bg-red-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 focus:outline-none block'>
							Enviar
						</button>
					</form>
				)}
				<p className='mb-2 text-sm text-white'>
					<a href='#' className='hover:underline'>
						info@webjump.com
					</a>
				</p>
				<p className='text-sm text-white'>
					<a href='#' className='hover:underline'>
						55 11 99999-9999
					</a>
				</p>
			</div>
		</>
	)
}
