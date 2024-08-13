import { useNavigate } from "react-router-dom"
import Banner from "../components/Banner"

export default function Home() {
	const navigate = useNavigate()

	const title = "Catálogo completo"
	const text = "Clique no botão abaixo para ver nosso catálogo completo."

	const handleClick = () => {
		navigate("/products")
	}
	return (
		<section>
			<Banner title={title} text={text} onClick={handleClick} />
			<h2 className='mt-10 text-2xl font-bold tracking-tight text-gray-900'>
				Seja bem-vindo(a) à nossa loja.
			</h2>
			<p className='mt-6'>
				It is a long established fact that a reader will be distracted by the
				readable content of a page when looking at its layout. The point of
				using Lorem Ipsum is that it has a more-or-less normal distribution of
				letters, as opposed to using 'Content here, content here', making it
				look like readable English. Many desktop publishing packages and web
				page editors now use Lorem Ipsum as their default model text, and a
				search for 'lorem ipsum' will uncover many web sites still in their
				infancy. Various versions have evolved over the years, sometimes by
				accident, sometimes on purpose (injected humour and the like).
			</p>
			<p className='mt-6'>
				It is a long established fact that a reader will be distracted by the
				readable content of a page when looking at its layout. The point of
				using Lorem Ipsum is that it has a more-or-less normal distribution of
				letters, as opposed to using 'Content here, content here', making it
				look like readable English. Many desktop publishing packages and web
				page editors now use Lorem Ipsum as their default model text, and a
				search for 'lorem ipsum' will uncover many web sites still in their
				infancy. Various versions have evolved over the years, sometimes by
				accident, sometimes on purpose (injected humour and the like).
			</p>
		</section>
	)
}
