import { useSelector } from "react-redux"
import CardProduct from "../components/HomePage/CardProduct"


const HomePage = () => {

    //Prueva
    const cart = useSelector(reducer => reducer.cart)
    console.log(cart)
    //ELIMINAR

    

  const products = useSelector(reducer => reducer.products)


  return (
    <div>
        <div>
            {
                products?.map(product => (
                    <CardProduct
                        key={product.id}
                        product={product}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default HomePage