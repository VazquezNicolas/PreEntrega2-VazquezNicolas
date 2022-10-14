const ItemDetail = ({img, nombre, precio}) => {  

  return (
    <div>
        <img src={img} alt={nombre}/>
        <h1>{nombre}</h1>
        <p>{precio}</p>
    </div>
)
}
export default ItemDetail

