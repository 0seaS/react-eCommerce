import { useSelector } from "react-redux"
import CardProduct from "../components/HomePage/CardProduct"


const HomePage = () => {

  const products = useSelector(reducer => reducer.products)

  console.log(products)

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