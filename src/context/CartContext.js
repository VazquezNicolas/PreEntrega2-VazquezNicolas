import {useState, createContext, useEffect } from "react"

export const CartContext = createContext({
    cart: [],
    totalQuantity: 0
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const totalQty = getQuantity()
        setTotalQuantity(totalQty)

    }, [cart])

    const getTotal = () => {
        let accu = 0
  
        cart.forEach(prod => {
            accu += prod.quantity * prod.precio
        })
  
        return accu
    }
    useEffect(() => {
        const total = getTotal()
        setTotal(total)
      }, [cart])

      const addItem = (productToAdd, quantity) => {
        if(!isInCart(productToAdd.id)) {
            productToAdd.quantity = quantity
            setCart([...cart, productToAdd])
        } else {
            const cartUpdated = cart.map(prod => {
                if(prod.id === productToAdd.id) {
                const productUpdated = {
                    ...prod,
                    quantity: quantity,
                    }
                return productUpdated} else {
                    return prod
                }
            })
            setCart(cartUpdated)
        }
    }

    const getQuantity = () => {
        let accu = 0
        cart.forEach(prod => {
            accu += prod.quantity
        })
       return accu
    }

    const removeItem = (id) => {
        const cartWithoutProduct = cart.filter(prod => prod.id !== id)
        setCart(cartWithoutProduct)
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const clearCart = () => {
        setCart([])
    }

    const getProductQuantity = (id) => {
        const product = cart.find(prod => prod.id === id)

        return product.quantity
    }

return(
    <CartContext.Provider value={{cart, addItem, removeItem,totalQuantity, total, clearCart, getProductQuantity}}>
        {children}
    </CartContext.Provider>
)
}