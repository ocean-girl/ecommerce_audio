import { Link } from "react-router-dom"


const ProductsList = ({products}) => {
  return (
    <div>
        <h2>Aca van los productos</h2>
       {
        products.map((product, i)=> {
            return  (
                <div key={product.id}>
                    <h1                  
                    style={{ flexDirection: i % 2 === 0 ? "row" : "row-reverse"}}
                    >
                    {product.name}
                    </h1>
                    <Link to={`/productDetail/${product.id}`}>SEE PRODUCT</Link>
                </div>
            )      
        })}
               
    </div>
    )
  
}

export default ProductsList