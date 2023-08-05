import { useDispatch, useSelector } from "react-redux"
import { getCartThunk } from "../store/slices/cart.slice"
import { useEffect } from "react"


const CartPage = () => {

    const cart = useSelector(reducer => reducer.cart)
    const dispatch = useDispatch()
    console.log(cart)

    useEffect(() => {
        dispatch(getCartThunk())
    }, [])
    

  return (
    <div>CartPage</div>
  )
}

export default CartPage