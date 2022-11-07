export const createAdapterProductFromFirestore = (doc) => {
    const data = doc.data()

    const productAdapted = {
        id: doc.id,
        nombre: data.nombre,
        img: data.img,
        precio: data.precio,
        category: data.category,
        stock: data.stock
    }
    return productAdapted
}