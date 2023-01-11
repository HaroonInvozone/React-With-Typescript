import { IProduct } from "./App.model";
interface IProductProps {
    product: IProduct;
    productIndex: number;
    onBuy(product: IProduct): void;
    onUpdate(product: IProduct, index:number) : void;
    onRemove(product: IProduct,index:number): void;
}
export const Product = ({product, productIndex,onBuy,onUpdate,onRemove}:IProductProps) => {
    return (
    <div className={'App-item'}>
    <div className={'Product-name-container'}>
        <h3> {product.name}</h3> 
        <button className={'App-button'} onClick={() => onBuy(product)}>buy</button>
        <button className={'App-button'} onClick= {() => onUpdate(product, productIndex)}>Update</button>
        <button className={'App-button'} onClick= {() => onRemove(product, productIndex)}>Update</button>
    </div>

    <div><img src={product.image} alt={product.name} style={{width: '200px'}} /></div>
    <div className={'Price-item'}>price ${product.price}</div>
    </div>     
    )   
}