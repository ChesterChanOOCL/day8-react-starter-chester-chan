import React from 'react'
import ProductItem from './ProductItem'


export default function ProductCategory() {
    const products = [
        { 
            'name' :'football',
            'price' : 49.99,
            'status' : false 
        },
        { 
            'name' :'football',
            'price' : 49.99,
            'status' : false 
        },
        { 
            'name' :'football',
            'price' : 49.99,
            'status' : false 
        }
    ]
 
  return (
        <div>
            <div className="Product">
                {products.map((product) => (
                    <ProductItem product={product} />
                ))}
            </div>
        </div>
  )
}
