import { createBrowserRouter } from "react-router-dom"
import RootLayout from "./pages/Layout"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Product from "./pages/Product"
import Contact from "./pages/Contact"

const router = createBrowserRouter([
	{
		path: "/webjump/",
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "products",
				element: <Products />,
			},
			{
				path: "products/category/:categoryId",
				element: <Products />,
			},
			{
				path: "products/:productId",
				element: <Product />,
			},
			{
				path: "contact",
				element: <Contact />,
			},
		],
	},
])

export default router
