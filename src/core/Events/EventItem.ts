import EventEmitter from "events";
import { Product, ProductData } from '../../components/types/types';

class EventItem extends EventEmitter {
    public product: Product

    private _isActive;

    constructor(product: Product|ProductData) {
        super();
        this.product = product;
        if('isActive' in product){
            this._isActive = product.isActive
        }
        else{
            this._isActive = false;
        }
    }

    public get isActive() {
        return this._isActive;
    }
    public set isActive(v) {
        this.emit('onActiveChange', v)
        this._isActive = v;
    }

    public getProductData(){
        let p = this.product as ProductData;
        p.isActive = this.isActive;
        return p;
    }
}

export { EventItem }