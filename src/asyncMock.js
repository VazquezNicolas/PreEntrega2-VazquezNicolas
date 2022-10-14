const products = [
    {
       "nombre":"Pasapañuelos Poligonal","precio":200,"id":1,"cant":1,"img":"/img/pasapanuelos/p1.jpeg"
    },
    {
       "nombre":"Pasapañuelos Agujeros","precio":300,"id":2,"cant":1,"img":"/img/pasapanuelos/p2.jpeg"
    },
    {
       "nombre":"Pasapañuelos Tallado","precio":400,"id":3,"cant":1,"img":"/img/pasapanuelos/p3.jpeg"
    },
    {
        "nombre":"Pasapañuelos Celta","precio":500,"id":4,"cant":1,"img":"/img/pasapanuelos/celta.png"
    },
    {
       "nombre":"Pasapañuelos Cubo","precio":600,"id":5,"cant":1,"img":"/img/pasapanuelos/cubo.png"
    },
    {
       "nombre":"Pasapañuelos Saliente","precio":700,"id":6,"cant":1,"img":"/img/pasapanuelos/cuboSaliente.png"
    },
    {
       "nombre":"Pasapañuelos Manada","precio":800,"id":7,"cant":1,"img":"/img/pasapanuelos/manada.png"
    },
    {
       "nombre":"Pasapañuelos Tornado","precio":900,"id":8,"cant":1,"img":"/img/pasapanuelos/normal.png"
    },
    {
       "nombre":"Pasapañuelos Pochoclo","precio":1000,"id":9,"cant":1,"img":"/img/pasapanuelos/pochoclo.png"
    }
 ]
 
 export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
 }

 export const getProductById = (id) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find (prod => prod.id === id))
        }, 2000)
    })
 }