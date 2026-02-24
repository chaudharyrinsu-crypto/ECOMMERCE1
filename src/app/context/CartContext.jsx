const { createContext } = require("react")

const CartContext=createContext()
const CartProvider=({children})=>{
    return(
        <>
        <CartContext.Provider>
            {children}
        </CartContext.Provider>
        </>
    )
}