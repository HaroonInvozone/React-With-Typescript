import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { IProduct } from './App.model';
import { Product } from './Product';
import { PurchaseDisplay } from './PurchaseDispaly';

function App() {
  const initialProducts: IProduct[] =
  [ 
    { name: 'keyboard',
    image: './images/image001.png',
    price: 200
  },
  { 
    name: 'headphones',
    image: './images/image002.png',
    price: 300
  },
  { 
    name: 'mouse',
    image: './images/image003.png',
    price: 100
  }
]
const [products, setProducts] = useState(initialProducts);
const [isProductBought, setIsProductBought] = useState(false)
const [productBought, setProductBought] = useState(
  {name:'', image: '', price: 0})

const handlePurchse =(product:IProduct) =>{
  setIsProductBought(true);
  setProductBought(product);
}
const handleUpdate = (product:IProduct, index:number) => {
  const updatedProduct = {
    name: 'Samsung',
    image: './images/image001.png',
    price: 500
  } as IProduct

  // products[index] = updatedProduct
  // setProducts(products)
  const newProducts = products.map(
    (nextProduct, productIndex) => {
       if (productIndex === index)
        {
          return updatedProduct
        }
     return nextProduct
    })
// set the products state to the newly referenced array
setProducts(newProducts)
}

const handleRemove = (product:IProduct, indexToRemove:number) =>{
  const filteredProducts = products.filter(
    (nextProduct, productIndex) => 
    productIndex !== indexToRemove )

    setProducts(filteredProducts);
}
const handleCreate = () => {   
  const productToCreate = {
    name: 'Samsung',
    image: './images/image001.png',
    price: 500
  } as IProduct
  const newProducts = [...products, productToCreate]
  setProducts(newProducts)
}
  return (
    <>
    <>
      <h1 className='Tiny-store'>Tiny Store</h1>
      <button className ={'Create-product'} 
        onClick={() => handleCreate()}>
        Create Product
      </button>
      {
      (isProductBought) ? 
      <PurchaseDisplay productPurchase={productBought}/>
      : 
      ( 
      <div className={'App-container'}>
        {
      products.map((product, index )=>  {
        return(
          <Product
            product={product}
            productIndex = {index}
            onBuy={handlePurchse}
            onUpdate = {handleUpdate}
            onRemove = {handleRemove}
          />
        )
        })
      }
       </div>  
      )}  
    </>
    </>
  );
}

export default App;
