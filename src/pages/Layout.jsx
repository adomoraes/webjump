import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import ToolBar from "../components/ToolBar"
import HeaderContent from "../components/HeaderContent"
import Main from "../components/Main"

export default function RootLayout() {
	return (
		<>
			<header>
				<ToolBar />
				<HeaderContent />
				<NavBar />
			</header>
			<main>
				<Main />
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	)
}
