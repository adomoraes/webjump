import { useState, useEffect } from "react"
import { Outlet } from "react-router-dom"
import Filters from "./Filters"
import Breadcrumb from "./Breadcrumb"

export default function Main() {
	const [selectedFilters, setSelectedFilters] = useState({})
	const [isAsideVisible, setIsAsideVisible] = useState(false)

	const toggleAsideVisibility = () => {
		setIsAsideVisible(!isAsideVisible)
	}

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setIsAsideVisible(true)
			} else {
				setIsAsideVisible(false)
			}
		}

		handleResize()
		window.addEventListener("resize", handleResize)

		return () => {
			window.removeEventListener("resize", handleResize)
		}
	}, [])

	return (
		<div className='container mx-auto max-w-[1440px] grid grid-cols-1 md:grid-cols-4 gap-4 px-4 py-6'>
			<div className='col-span-full'>
				<Breadcrumb />
			</div>

			<aside className='col-span-1 md:col-span-1 bg-gray-100 p-4 rounded-md shadow-sm'>
				<button
					className={`mb-2 block md:hidden p-2 text-gray-600 hover:bg-gray-400 font-semibold rounded w-full ${
						isAsideVisible ? "bg-gray-400" : "bg-gray-300"
					}`}
					onClick={toggleAsideVisibility}>
					{isAsideVisible ? "Fechar Filtros [X]" : "Abrir Filtros"}
				</button>
				{isAsideVisible && <Filters setSelectedFilters={setSelectedFilters} />}
			</aside>

			<section className='col-span-1 md:col-span-3'>
				<div>
					<Outlet context={{ selectedFilters, setSelectedFilters }} />
				</div>
			</section>
		</div>
	)
}
