import { useState } from 'react';

const ItemCount = ({onAdd}) => {
    const [cont, setCont] = useState(0)
    const [stock] = useState(10)

    const increment = () =>{
        if (stock>cont)setCont(cont+1)
    }

    const decrement = () =>{
        if (cont>0) setCont(cont-1)     
    }

    return (
        <div>
            <h1>Contador</h1>
            <h2>{cont}</h2>
            <h3> stock={stock}</h3>
            <button onClick={decrement}>restar</button>
            <button onClick={increment}>sumar</button>
            <button onClick={onAdd}>agregar al carrito </button>
        </div>
    )
}

export default ItemCount