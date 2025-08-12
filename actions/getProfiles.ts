
import clientPromise from "@/lib/mongodb"

export async function getProfiles() {
    const client = await clientPromise
    const db = client.db("next-cards")
    const profiles = await db.collection("profiles").find().toArray()

    return profiles
}