import './ProductItem.css'

type Change = 'btc' | 'not';
type Price = { value: number, change: Change }
type ProductItemProps = { name: string, imgUrl: URL | string, price: Price }

const ProductItem = ({ name, imgUrl, price }: ProductItemProps) => {

    const onClick = () => {

    }

    return (
        <div className='product-item--container'>
            <div className="product-item--img" style={{backgroundImage:`URL(${imgUrl})`}}></div>
            <h3 className='product-item--title'>{name}</h3>
            <h4 className='product-item-price'>price:{price.value} {price.change}</h4>
            <button className='prduct-item--btn' onClick={onClick}>Buy</button>
        </div>
    )
}