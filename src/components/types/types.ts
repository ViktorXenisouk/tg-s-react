export type Change = 'btc' | 'not';
export type Price = { value: number, change: Change }
export type Product = { id: string, title: string, imgUrl: URL | string, price: Price, discription: string, };
export type ProductData = Product & {isActive:boolean}
export type ProductItemProps = { product: Product }