import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrums from "../Components/Breadcrums/Breadcrums";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProduct from "../Components/RelatedProduct/RelatedProduct";



//grab all products data using CONTEXT API
function Product() {

    const {all_product}  = useContext(ShopContext);
    const {productId}  = useParams();  // here we use useParams => to get product Id using this id we find  products in all_products data and assign in one variable.
    const product = all_product.find((e) => e.id === Number(productId));


    return(
        <>
        <Breadcrums product={product}  />
        <ProductDisplay  product={product} />
        <DescriptionBox />
        <RelatedProduct />
        </>
    )
}

export default Product;