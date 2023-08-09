import { useSelector } from "react-redux"
import CardProduct from "../components/HomePage/CardProduct"
import { useRef, useState } from "react"
import FilterCategory from "../components/HomePage/FilterCategory"
import FilterPrice from "../components/HomePage/FilterPrice"


const HomePage = () => {

    const [nameValue, setNameValue] = useState('')

  const products = useSelector(reducer => reducer.products)

  const inputName = useRef()

  const handleFilterName = () => {
    setNameValue(inputName.current.value)
  }

  // FILTER BY NAME

  const cbFilter = (prod) => {
    //FILTER BY NAME
    const inputValueLower = nameValue.toLowerCase().trim()
    const nameReal = prod.title.toLowerCase()
    const filterName = nameReal.includes(inputValueLower)
    //FILTER BY NAME
    const price = Number(prod.price)
    // otra forma
    // const price = +prod.price
    const filterPrice = fromTo.from <= price && price <= fromTo.to
    return filterName && filterPrice
  }

  // FILTER BY PRICE 
  const [fromTo, setFromTo] = useState({
    from: 0,
    to: Infinity
  })

  return (
    <div>
        <input 
            ref={inputName} 
            onChange={handleFilterName} 
            type="text" 
        />
        <FilterCategory/>
        <FilterPrice/>
        <div>
            {
                products?.filter(cbFilter).map(product => (
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