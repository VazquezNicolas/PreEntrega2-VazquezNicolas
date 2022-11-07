import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../firebase'
import { createAdapterProductFromFirestore } from '../../productAdapter.js/productsAdapter' 

export const getProducts = (categoryId) => {
    return new Promise((resolve,reject) => {

        const collectionRef = categoryId
        ? query(collection(db, 'products'), where('category', '==', categoryId ))
        : collection (db, 'products')

        getDocs(collectionRef).then(response => {
            const productsAdapted = response.docs.map(doc => {
            const data = doc.data()                
            return createAdapterProductFromFirestore(doc)
            })

            resolve(productsAdapted)
        }).catch(error => {
            reject(error)
        })
    })

}