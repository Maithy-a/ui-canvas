"use server"

import clientPromise from "@/lib/mongodb"

export async function getUsers() {
    const client = await clientPromise
    const db = client.db("next-cards")
    const Users = await db.collection("users").find().toArray()
    
    return Users
}