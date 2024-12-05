import { Product } from "../components/types/types"

const products: Product[] = [
    { id: '0', title: 'sss', imgUrl: '', price: { value: 10, change: 'btc' }, discription: 's' },
    { id: '1', title: 'sss', imgUrl: '', price: { value: 10, change: 'btc' }, discription: 's' },
    { id: '2', title: 'sss', imgUrl: '', price: { value: 10, change: 'btc' }, discription: 's' },
    { id: '3', title: 'sss', imgUrl: '', price: { value: 10, change: 'btc' }, discription: 's' },
    { id: '4', title: 'sss', imgUrl: '', price: { value: 10, change: 'btc' }, discription: 's' },
    { id: '5', title: 'sss', imgUrl: '', price: { value: 10, change: 'btc' }, discription: 's' },
    { id: '6', title: 'sss', imgUrl: '', price: { value: 10, change: 'btc' }, discription: 's' },
]

const getAllProducts = () => {
    return products;
}

const getProductById = (id : string) => {
    return products.find((product) => product.id === id);
}

export {getAllProducts,getProductById}