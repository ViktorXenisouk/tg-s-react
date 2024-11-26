import { EventEmitter } from 'events';

type Param = { name: string, value: any }

class Item<T> extends EventEmitter {
    private props: Param[] = []

    constructor(item: T) {
        super()
        for (let variable in item) {
            this.props.push({ name: variable, value: item[variable] })

        }
    }

    public getProp(name: string) {
        for (let i = 0; i < this.props.length; i++) {
            if (this.props[i].name === name) {
                return this.props[i].value
            }
        }
        throw new Error('error when try to get prop')
    }

    public setProp(name: string,newValue:any) {
        for (let i = 0; i < this.props.length; i++) {
            if (this.props[i].name === name) {
                return this.props[i].value
            }
        }
        throw new Error('error when try to set prop')
    }
}

export { Item };