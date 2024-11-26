export type Change = 'btc' | 'not';
export type Price = { value: number, change: Change }
export type Product = { id: number, title: string, imgUrl: URL | string, price: Price, discription: string };
export type ProductItemProps = { product: Product, onButtonClick?: (id: number) => void }