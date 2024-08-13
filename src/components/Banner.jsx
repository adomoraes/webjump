export default function Banner({ title, text, onClick }) {
	return (
		<div className='bg-blue-500 text-white p-6 rounded-md mb-6'>
			<h1 className='text-xl font-bold'>{title}</h1>
			<p>{text}</p>
			<button
				className='rounded-full bg-red-500 text-white hover:bg-red-800 p-2 text-sm font-semibold mt-6'
				onClick={onClick}>
				Todos os produtos
			</button>
		</div>
	)
}
