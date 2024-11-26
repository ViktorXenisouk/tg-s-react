import { Product } from "../types/types";
import { ProductItem } from "../ProductItem/ProductItem";

const ProductList = () => {
    let itemIds : number[] = []

    const products : Product[] = [
        {id:0,title:'sss', imgUrl:'',price:{value:10,change:'btc'},discription:'s'},
        {id:0,title:'sss', imgUrl:'',price:{value:10,change:'btc'},discription:'s'},
        {id:0,title:'sss', imgUrl:'',price:{value:10,change:'btc'},discription:'s'},
        {id:0,title:'sss', imgUrl:'',price:{value:10,change:'btc'},discription:'s'},
    ]

    

    return(
        <div className="list">
            {products.map((product) => 
            <ProductItem product={product}/>
            )}
        </div>
    )
}

export default ProductList;