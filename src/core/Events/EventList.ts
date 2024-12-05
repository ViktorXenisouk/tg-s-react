import EventEmitter from "events";
import { Product } from '../../components/types/types';
import { EventItem } from "./EventItem";

class EventList extends EventEmitter{
    private _data :EventItem[];
    public get data(){
        return this._data.slice();
    }
    constructor(data:Product[]){
        super()
        this._data = data.map((v) => new EventItem(v))
        this._initializedData();
    }

    public clear(){
        for(let i = 0; i<this._data.length;i++){
            this._data[i].removeAllListeners('onActiveChange')
        }
    }

    public add(product : Product){
        const e = new EventItem(product);
        e.on('onActiveChange', () => {
            this.emit('onElementChange',this._data.length)
        })
        this._data.push(e)

    }

    public getData(){
        const arr = this.data.map((item) => item.getProductData())
        return arr;
    }

    public getActiveProducts(){
        return this.data.filter((item) => item.isActive === true)
    }

    private _initializedData(){
        for(let i = 0; i < this._data.length;i++){
            this._data[i].on('onActiveChange',(v) => {
                this.emit('onArrayChange',i,)
            })
        }
    }
}

export {EventList};