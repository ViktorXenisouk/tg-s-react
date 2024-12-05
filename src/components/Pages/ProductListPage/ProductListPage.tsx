import { ProductItem } from "../../ProductItem/ProductItem";
import { getAllProducts } from "../../../core/server";
import './ProductListPage.css'

const ProductList = () => {
    const products = getAllProducts();
    return (
        <div className="list">
            {products.map((obj) =>
                <ProductItem  product={obj} />
            )}
        </div>
    )
}

export default ProductList;