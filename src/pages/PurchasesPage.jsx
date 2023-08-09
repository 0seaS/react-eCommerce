import { useEffect } from "react"
import usePurchases from "../hooks/usePurchases"
import ProductPurchase from "../components/PurchasesPage/ProductPurchase"


const PurchasesPage = () => {

    const {getAllPurchases, purchases} = usePurchases()

    useEffect(() => {
        getAllPurchases()
    }, [])

    console.log(purchases)

  return (
    <section>
        <h2>My PurchasesPage</h2>
        <div>
            {
                purchases?.map(purch => (
                    <ProductPurchase
                        key={purch.id}
                        purchase={purch}
                    />
                ))
            }
        </div>
    </section>
  )
}

export default PurchasesPage