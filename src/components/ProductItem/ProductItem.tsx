import './ProductItem.css'
import MyButton from '../Button/Button';
import { ProductItemProps } from '../types/types';

const ProductItem = ({ product, onButtonClick }: ProductItemProps) => {

    const onClick = () => {
        if (onButtonClick)
            onButtonClick(product.id)
    }

    return (
        <div className='product-item--container'>
            <div className="product-item--img" style={{ backgroundImage: `URL(${product.imgUrl})` }}></div>
            <div className='product-item--title'>{product.title}</div>
            <div className='product-item--discriptoin'> </div>
            <div className='product-item-price'>
                <span>price:<b>{product.price.value} {product.price.change}</b></span>
            </div>

            <MyButton className='product-item--btn' onClick={onClick}>
                Buy 
            </MyButton>
        </div>
    )
}

export { ProductItem };