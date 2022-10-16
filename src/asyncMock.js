const products = [
    {
       "nombre":"Pasapañuelos Poligonal","precio":200,"id":1,"stock":10,"img":"/img/pasapanuelos/p1.jpeg",category: 'pasapañuelos'
    },
    {
       "nombre":"Pasapañuelos Agujeros","precio":300,"id":2,"stock":11,"img":"/img/pasapanuelos/p2.jpeg",category: 'pasapañuelos'
    },
    {
       "nombre":"Pasapañuelos Tallado","precio":400,"id":3,"stock":12,"img":"/img/pasapanuelos/p3.jpeg",category: 'pasapañuelos'
    },
    {
        "nombre":"Pasapañuelos Celta","precio":500,"id":4,"stock":13,"img":"/img/pasapanuelos/celta.png",category: 'pasapañuelos'
    },
    {
       "nombre":"Pasapañuelos Cubo","precio":600,"id":5,"stock":14,"img":"/img/pasapanuelos/cubo.png",category: 'pasapañuelos'
    },
    {
       "nombre":"Pasapañuelos Saliente","precio":700,"id":6,"stock":15,"img":"/img/pasapanuelos/cuboSaliente.png",category: 'pasapañuelos'
    },
    {
       "nombre":"Pasapañuelos Manada","precio":800,"id":7,"stock":16,"img":"/img/pasapanuelos/manada.png",category: 'pasapañuelos'
    },
    {
       "nombre":"Pasapañuelos Tornado","precio":900,"id":8,"stock":17,"img":"/img/pasapanuelos/normal.png",category: 'pasapañuelos'
    },
    {
       "nombre":"Pasapañuelos Pochoclo","precio":1000,"id":9,"stock":18,"img":"/img/pasapanuelos/pochoclo.png",category: 'pasapañuelos'
    }
 ]
 
 export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
 }

 export const getProductById = (id) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find (prod => {return prod.id == id}))
        }, 500)
    })
 }

 export const getProductsByCategory = (categoryId) => {
   return new Promise (resolve => {
       setTimeout(() => {
           resolve(products.filter(prod => prod.category === categoryId))
       }, 500)
   })
}