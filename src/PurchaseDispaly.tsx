import { IProduct } from "./App.model";

interface IPurchaseDisplayProp{
    productPurchase : IProduct
}
export const PurchaseDisplay = ({productPurchase}:IPurchaseDisplayProp) => {
    return (
        <div className={'Purchase-display-line'}>
            <h1>
                You purchase a product {productPurchase.name} 
                whose price is ${productPurchase.price}
            </h1>
        </div>
    )
}