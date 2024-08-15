import { useEffect, useState } from "react"
import { useParams, useOutletContext } from "react-router-dom"
import { supabase } from "../lib/supabase"

const fetchProductsAndCategories = async () => {
	try {
		const [productsResponse, categoriesResponse] = await Promise.all([
			supabase.from("products").select("*"),
			supabase.from("categories").select("*"),
		])

		if (productsResponse.error) throw productsResponse.error
		if (categoriesResponse.error) throw categoriesResponse.error

		return {
			products: productsResponse.data,
			categories: categoriesResponse.data,
		}
	} catch (error) {
		console.error("Erro ao carregar produtos e categorias:", error)
		throw error
	}
}

const filterProducts = (products, categoryId, filters) => {
	let filteredProducts = products

	if (categoryId) {
		filteredProducts = filteredProducts.filter(
			(product) => product.categoryId?.toString() === categoryId
		)
	}

	if (filters.color) {
		filteredProducts = filteredProducts.filter((product) =>
			product.filter?.some((filter) => filter.color === filters.color)
		)
	}

	if (filters.gender) {
		filteredProducts = filteredProducts.filter((product) =>
			product.filter?.some((filter) => filter.gender === filters.gender)
		)
	}

	return filteredProducts
}

export default function Products() {
	const { selectedFilters } = useOutletContext()
	const { categoryId } = useParams()
	const [products, setProducts] = useState([])
	const [categories, setCategories] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const loadData = async () => {
			setLoading(true)
			try {
				const { products: fetchedProducts, categories: fetchedCategories } =
					await fetchProductsAndCategories()

				setCategories(fetchedCategories)
				const filteredProducts = filterProducts(
					fetchedProducts,
					categoryId,
					selectedFilters
				)
				setProducts(filteredProducts)
			} catch (error) {
				console.error("Erro ao carregar dados:", error)
				// Adicione qualquer tratamento de erro que você deseja
			} finally {
				setLoading(false)
			}
		}

		loadData()
	}, [categoryId, selectedFilters])

	const getCategoryName = (categoryId) => {
		const category = categories.find(
			(cat) => parseInt(cat.id) === parseInt(categoryId)
		)
		return category ? category.name : "Todos os Produtos"
	}

	if (loading) return <p>Carregando...</p>

	return (
		<section>
			<h2 className='text-red-500 text-3xl border-b p-4'>
				{getCategoryName(categoryId)}
			</h2>
			<section className='products'>
				<ul className='grid gap-4 max-[480px]:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
					{products.length > 0 ? (
						products.map((product) => (
							<li key={product.id} className='bg-white p-4'>
								<div className='aspect-w-1 aspect-h-1 w-[210px] h-[210px] mx-auto border overflow-hidden flex items-center justify-center p-2'>
									<img
										src={`http://localhost:8888/${product.image}`}
										alt={product.name}
										className='product-image object-contain max-w-full max-h-full'
									/>
								</div>
								<h4 className='text-gray-500 text-base uppercase text-center mt-2 min-h-[55px]'>
									{product.name}
								</h4>
								<div className='flex justify-center items-baseline space-x-2'>
									{product.specialPrice && (
										<p className='special-price text-gray-500 line-through text-base'>
											R$ {product.specialPrice.toFixed(2)}
										</p>
									)}
									<p className='text-gray-800 text-xl font-extrabold'>
										R$ {product.price.toFixed(2)}
									</p>
								</div>
								<button className='mt-2 bg-blue-500 text-white px-4 py-2 rounded uppercase font-semibold w-full hover:bg-blue-600'>
									Comprar
								</button>
							</li>
						))
					) : (
						<p>Nenhum produto disponível</p>
					)}
				</ul>
			</section>
		</section>
	)
}
