"use server"

import clientPromise from "@/lib/mongodb"

export async function getProjects() {
    const client = await clientPromise
    const db = client.db("next-cards")
    const projects = await db.collection("projects").find().toArray()

    return projects
}