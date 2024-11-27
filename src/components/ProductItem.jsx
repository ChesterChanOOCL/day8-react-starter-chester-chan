import "./ProductItem.css"
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const ProductItem = (prop) => {


    const productItem = {
        name: "Football",
        price: 49.99,
        status: true
    }
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

    const rows = [
        { id: 1, name: productItem, price : productItem.price, status: productItem.status },
    ]
    {
        return (
            <div className="wrapper">

          <span>{ProductItem.name}</span>
                <span>{ProductItem.price}</span>
                
                {ProductItem.status ? <span>In Stock</span> : <span>Out of Stock</span>}
            </div>
        )

    };
}

export default ProductItem;