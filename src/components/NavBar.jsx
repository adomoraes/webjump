import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import Contact from "../pages/Contact"
import { supabase } from "../lib/supabase"

const NavBar = () => {
	const [categories, setCategories] = useState([])
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [isContactFormVisible, setIsContactFormVisible] = useState(false)

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const { data, error } = await supabase.from("categories").select("*")

				if (error) throw error
				setCategories(data)
			} catch (error) {
				console.error("Erro ao buscar categorias:", error.message)
			}
		}

		fetchCategories()
	}, [])

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	const closeMenu = () => {
		setIsMenuOpen(false)
	}

	const toggleFormVisibility = () => {
		setIsContactFormVisible(!isContactFormVisible)
	}

	return (
		<nav className='bg-red-500 text-white'>
			<div className='max-w-[1440px] mx-auto flex md:justify-center lg:justify-start items-center'>
				<div className='sm:flex sm:items-center md:hidden'>
					<button
						className='p-2 focus:outline-none flex items-center'
						onClick={toggleMenu}>
						<svg
							className='w-6 h-6'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h16M4 18h16'></path>
						</svg>
						<span className='ml-2'>MENU</span>
					</button>
				</div>

				<ul className='hidden md:flex md:items-center lg:items-start font-semibold uppercase text-sm h-full'>
					<li className='mr-4 flex items-center hover:bg-red-800 h-full'>
						<Link to={`./`} className='hover:text-gray-200 px-4 p-1 md:p-3'>
							Página Inicial
						</Link>
					</li>
					{categories.map((category) => (
						<li
							key={category.id}
							className='mr-4 flex items-center hover:bg-red-800 h-full'>
							<Link
								to={`./products/category/${category.id}`}
								className='hover:text-gray-200 px-4 p-1 md:p-3'>
								{category.name}
							</Link>
						</li>
					))}
					<li
						className={`flex items-center hover:bg-red-800 h-full ${
							isContactFormVisible ? "bg-red-800" : ""
						}`}>
						<button
							className='hover:text-gray-200 px-4 p-1 md:p-3 uppercase'
							onClick={toggleFormVisibility}>
							{isContactFormVisible ? "Fechar [X]" : "Contato"}
						</button>
					</li>
				</ul>

				<div
					className={`fixed inset-y-0 left-0 w-64 bg-red-600 text-white transform ${
						isMenuOpen ? "translate-x-0" : "-translate-x-full"
					} transition-transform duration-300 ease-in-out md:hidden`}>
					<button className='p-4 focus:outline-none' onClick={toggleMenu}>
						<svg
							className='w-6 h-6'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M6 18L18 6M6 6l12 12'></path>
						</svg>
					</button>
					<ul className='p-4 font-semibold uppercase text-sm'>
						<li className='flex items-center hover:bg-red-800 h-full mb-4'>
							<Link
								to={`/`}
								className='hover:text-gray-200 p-2 md:p-3'
								onClick={closeMenu}>
								Página Inicial
							</Link>
						</li>
						<li className='flex items-center hover:bg-red-800 h-full mb-4'>
							<Link
								to={`/products`}
								className='hover:text-gray-200 p-2 md:p-3'
								onClick={closeMenu}>
								Todos os produtos
							</Link>
						</li>
						{categories.map((category) => (
							<li
								key={category.id}
								className='flex items-center hover:bg-red-800 h-full mb-4'>
								<Link
									to={`/products/category/${category.id}`}
									className='hover:text-gray-200 p-2 md:p-3'
									onClick={closeMenu}>
									{category.name}
								</Link>
							</li>
						))}
						<li className='flex items-center hover:bg-red-800 h-full mb-4'>
							<button
								className='hover:text-gray-200 p-2 md:p-3 uppercase'
								onClick={() => {
									closeMenu()
									toggleFormVisibility()
								}}>
								Contato
							</button>
						</li>
					</ul>
				</div>
			</div>

			{isContactFormVisible && <Contact />}
		</nav>
	)
}

export default NavBar
