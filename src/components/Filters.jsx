import React, { useState, useEffect, useCallback } from "react"
import { Link } from "react-router-dom"
import { supabase } from "../lib/supabase"
import PropTypes from "prop-types"

const Filters = ({ setSelectedFilters }) => {
	const [filters, setFilters] = useState({
		categoryId: "",
		color: "",
		gender: "",
	})
	const [categories, setCategories] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	const handleFilterChange = useCallback(
		(filterName, value) => {
			const newFilters = { ...filters, [filterName]: value }
			setFilters(newFilters)
			setSelectedFilters(newFilters)
		},
		[filters, setSelectedFilters]
	)

	const handleClearFilters = () => {
		const resetFilters = {
			categoryId: "",
			color: "",
			gender: "",
		}
		setFilters(resetFilters)
		setSelectedFilters(resetFilters)
	}

	useEffect(() => {
		const fetchCategories = async () => {
			setLoading(true)
			try {
				const { data, error } = await supabase.from("categories").select("*")

				if (error) throw error
				setCategories(data || [])
			} catch (error) {
				setError("Erro ao buscar categorias.")
				console.error("Erro ao buscar categorias:", error.message)
			} finally {
				setLoading(false)
			}
		}

		fetchCategories()
	}, [])

	const sortedCategories = categories
		? categories.slice().sort((a, b) => a.name.localeCompare(b.name))
		: []

	const shouldShowClearButton = filters.color || filters.gender

	return (
		<>
			<h2 className='text-2xl uppercase text-red-500 font-semibold mb-4'>
				Filtre por
			</h2>
			{loading ? (
				<p>Carregando categorias...</p>
			) : error ? (
				<p className='text-red-500'>{error}</p>
			) : (
				<div className='mb-4'>
					<h3 className='text-lg m-2 font-semibold'>Categorias</h3>
					<ul className='h-full'>
						{sortedCategories.length > 0 ? (
							sortedCategories.map((category) => (
								<li
									key={category.id}
									className='hover:bg-gray-200 h-full border-b'>
									<Link
										to={`./products/category/${category.id}`}
										className='block p-2 w-full h-full'>
										{category.name}
									</Link>
								</li>
							))
						) : (
							<li>Nenhuma categoria disponível</li>
						)}
						<li className='hover:bg-gray-200 h-full border-b'>
							<Link to={`/products/`} className='block p-2 w-full h-full'>
								Todas as categorias
							</Link>
						</li>
					</ul>
				</div>
			)}
			<div className='mb-4'>
				<h3 className='text-xl mb-2 font-semibold'>Cor</h3>
				<select
					onChange={(e) => handleFilterChange("color", e.target.value)}
					value={filters.color}
					className='p-2 border rounded w-full'>
					<option value=''>Todas</option>
					<option value='Amarela'>Amarela</option>
					<option value='Azul'>Azul</option>
					<option value='Bege'>Bege</option>
					<option value='Cinza'>Cinza</option>
					<option value='Laranja'>Laranja</option>
					<option value='Preta'>Preta</option>
					<option value='Preto'>Preto</option>
					<option value='Rosa'>Rosa</option>
				</select>
			</div>
			<div className='mb-4'>
				<h3 className='text-xl mb-2 font-semibold'>Gênero</h3>
				<select
					onChange={(e) => handleFilterChange("gender", e.target.value)}
					value={filters.gender}
					className='p-2 border rounded w-full'>
					<option value=''>Todos</option>
					<option value='Feminina'>Feminino</option>
					<option value='Masculina'>Masculino</option>
				</select>
			</div>
			{shouldShowClearButton && (
				<button
					onClick={handleClearFilters}
					className='bg-red-500 text-white p-1 rounded hover:bg-red-700 w-full font-semibold'>
					Limpar Filtros
				</button>
			)}
		</>
	)
}

Filters.propTypes = {
	setSelectedFilters: PropTypes.func.isRequired,
}

export default Filters
