import HomeContainer from "../components/pages/home/HomeContainer";
import LoginContainer from "../components/pages/login/LoginContainer";
import ProductDetailContainer from "../components/pages/productDetail/ProductDetailContainer";
import ProductsListContainer from "../components/pages/productsList/ProductsListContainer";

export const menuRoutes = [
    {
        id: "home",
        path: "/",
        Element: HomeContainer,
    },
    {
        id: "login",
        path: "/login",
        Element: LoginContainer,
    },
    {
        id: "products",
        path: "/category/:categoryName",
        Element: ProductsListContainer,

    },
    {
        id: "detail",
        path: "/productDetail/:id",
        Element: ProductDetailContainer,

    }
]