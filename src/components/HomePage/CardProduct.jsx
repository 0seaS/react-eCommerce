import { useNavigate } from "react-router-dom"
import useCartApi from "../../hooks/useCartApi"


const CardProduct = ({ product }) => {

    const navigate = useNavigate()
    const {addProductInCart} = useCartApi()

    const handleNavigate = () => {
        navigate(`/product/${product.id}`)
    }

    const handleAddCard = e => {
        e.stopPropagation()
        const data = {
            quantity: 1,
            productId: product.id
        }
        addProductInCart(data)
    }

  return (
    <article onClick={handleNavigate}>
        <header>
            <img src={product.images[0].url} alt="" />
        </header>
        <section>
            <h4>{product.brand}</h4>
            <h3>{product.title}</h3>
            <article>
                <h3>Price</h3>
                <span>{product.price}</span>
            </article>
            <button onClick={handleAddCard}>
                <i className="bx bxs-cart-add"></i>
            </button>
        </section>
    </article>
  )
}

export default CardProduct