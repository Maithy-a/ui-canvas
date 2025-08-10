
"use server"

import clientPromise from "@/lib/mongodb"

export async function getProducts() {
    const client = await clientPromise
    const db = client.db("next-cards")
    const Products = await db.collection("products").find().toArray()
    
    return Products
}